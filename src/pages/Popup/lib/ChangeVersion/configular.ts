/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:09:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-27 11:03:24
 * @FilePath: /sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/configular.ts
 * @Description: update here
 */
import { LIB_TYPES } from './../effect'
import { ConfigSchema, ItemTypeSets } from './../../../../components/XForm/type'
import { ChangeVersionKeys } from './type'

export default {
  belonging: LIB_TYPES.CHANGE_VERSION,
  modalTitle: '环境切换功能',
  title: '环境切换',
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
      label: 'ENV_KEY',
      name: ChangeVersionKeys.tag_key,
    }, {
      type: ItemTypeSets.Input,
      label: 'ENV_VALUE',
      name: ChangeVersionKeys.tag_value,
    }],
    btns: [{
      props: {
        children: '更新配置',
        htmlType: 'submit'
      }
    }]
  } as ConfigSchema
}