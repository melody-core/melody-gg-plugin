/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:09:18
 * @LastEditors: xinyu_wang06 xinyu.wang06@mihoyo.com
 * @LastEditTime: 2023-03-30 14:26:11
 * @FilePath: /sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/configular.ts
 * @Description: update here
 */
import { LIB_TYPES } from './../effect'
import { ConfigSchema, ItemTypeSets } from './../../../../components/XForm/type'
import { PagePerformanceKeys } from './type'

export default {
  belonging: LIB_TYPES.PAGE_PERFORMANCE,
  modalTitle: '页面性能检测',
  title: '页面性能检测',
  configType: 'form-modal',
  config: {
    props: {
      name: `${LIB_TYPES.PAGE_PERFORMANCE}_FORM`,
    },
    children: [{
      type: ItemTypeSets.Switch,
      label: '是否开启',
      name: PagePerformanceKeys.is_open
    }],
    btns: [{
      props: {
        children: '更新配置',
        htmlType: 'submit'
      }
    }]
  } as ConfigSchema
}