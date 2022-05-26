/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:09:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 14:30:05
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/configular.ts
 * @Description: update here
 */
import { LIB_TYPES } from './../effect'
import { ConfigSchema, ItemTypeSets } from './../../../../components/XForm/type'
import { ChangeVersionKeys } from './type'

export default {
  belonging: LIB_TYPES.CHANGE_VERSION,
  modalTitle: '版本切换功能配置',
  title: '版本切换',
  configType: 'form-modal',
  config: {
    props: {
      name: `${LIB_TYPES.CHANGE_VERSION}_FORM`,
    },
    children: [{
      type: ItemTypeSets.Switch,
      label: '是否开启',
      name: ChangeVersionKeys.is_open
    }, {
      type: ItemTypeSets.Input,
      label: '版本tag',
      name: ChangeVersionKeys.version_tag,
    }],
    btns: [{
      props: {
        children: '更新配置',
        htmlType: 'submit'
      }
    }]
  } as ConfigSchema
}