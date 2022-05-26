/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 17:49:27
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 18:48:57
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/ExtendInterface/index.tsx
 * @Description: update here
 */
import { Card, Tabs } from 'antd'

import { useFuncList } from './effect'

import styles from './index.module.css';

const { TabPane } = Tabs

export const ExtendInterface = () => {
  const { funcList, keyRenderIndex, defaultTabActiveKey } = useFuncList();
  return (
    <Card className={styles['extend-wrap']} title="已开启的功能">
      <Tabs 
        defaultActiveKey={defaultTabActiveKey || funcList[0]?.belonging || ''}
        tabPosition='top'
        key={keyRenderIndex}
      >
        {funcList.map(funcItem => {
          const { title, belonging, Base, values, onFinish} = funcItem;
          return (
            <TabPane tab={`${title}`} key={`${belonging}`}>
              <Base {...values} onFinish={onFinish}/>
            </TabPane>
          )
        })}
      </Tabs>
    </Card>
  )
}

export default ExtendInterface;