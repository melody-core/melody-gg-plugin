/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 19:07:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 11:19:00
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/components/XForm/effect.tsx
 * @Description: update here
 */


import { Input, InputNumber, Checkbox, Switch, Radio, Select } from 'antd'
import { ItemTypeSets } from './type'

const createFormComponentMap = ()=> {
  const formSet = new Map();
  // 类型与对应组件的映射关系
  formSet.set(ItemTypeSets.Input, Input);
  formSet.set(ItemTypeSets.Checkbox, Checkbox);
  formSet.set(ItemTypeSets.Password, Input.Password);
  formSet.set(ItemTypeSets.InputNumber, InputNumber);
  formSet.set(ItemTypeSets.Select, Select);
  formSet.set(ItemTypeSets.CheckboxGroup, Checkbox.Group);
  formSet.set(ItemTypeSets.RadioGroup, Radio.Group);
  formSet.set(ItemTypeSets.Switch, Switch);
  
  return formSet;
}

export const formSet = createFormComponentMap();