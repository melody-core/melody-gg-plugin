/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-27 11:24:40
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 09:59:34
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/func.ts
 * @Description: update here
 */
import { GetStoreData } from '../../utils/type';
const CHANGE_VERSION = 'CHANGE_VERSION'


const ID = 8086;


/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-25 16:41:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-26 10:24:45
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/utils/storage.ts
 * @Description: update here
 */



const getStoreData: GetStoreData = (keyList) => new Promise((resolve, reject)=>{
  chrome.storage.sync.get(keyList, function(result) {
    if (chrome.runtime.lastError) {
      return reject(chrome.runtime.lastError);
    }
    resolve(result);
  });
})


export const ChangeVersionFunc = async (values?: Record<any, any>) => {
  let is_open, tag_value, tag_key;
  if(values){
    is_open = values.is_open
    tag_key = values.tag_key
    tag_value = values.tag_value
  }else{
    const storageData = await getStoreData([`${CHANGE_VERSION}-config`]);
    const nValues = storageData[`${CHANGE_VERSION}-config`] || {}
    is_open = nValues.is_open
    tag_key = nValues.tag_key
    tag_value = nValues.tag_value
  }


  const rules = await chrome.declarativeNetRequest.getDynamicRules()
  const target = rules.find(item => item.id === ID);
  if(target) {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [ID]
    })
  }
  if(is_open){
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: ID,
          priority: 1,
          action: {
            type: 'modifyHeaders' as any,
            requestHeaders: [
              { 
                header: tag_key, 
                operation: 'set' as any, 
                value: tag_value
              },
            ],
          },
          condition: {
            urlFilter: '*'
          },
        },
      ],
    });
  }

}

ChangeVersionFunc();

chrome.storage.onChanged.addListener((changes, area) => {
  if(changes[`${CHANGE_VERSION}-config`]){
    const { newValue } = changes[`${CHANGE_VERSION}-config`]
    ChangeVersionFunc(newValue)
  }
});