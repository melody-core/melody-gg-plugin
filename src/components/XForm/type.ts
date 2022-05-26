/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:31:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 12:47:33
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/components/XForm/type.ts
 * @Description: update here
 */
import type { ButtonProps, ColProps } from 'antd'
import { Store } from "antd/lib/form/interface";



export enum ItemTypeSets{
  Input = 'Input',
  InputNumber = 'InputNumber',
  Password = 'Password',
  Checkbox = 'Checkbox',
  CheckboxGroup = 'CheckboxGroup',
  Select = 'Select',
  Radio = 'Radio',
  RadioGroup = 'RadioGroup',
  Switch = 'Switch'
}

export interface FormItemProps{
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  [key: string]: any;
}

export interface FormItem{
  name: string,
  wrapProps?: FormItemProps,
  required?: boolean,
  label?: string,
  message?: string,
  type: ItemTypeSets,
  props?: Record<string ,any>
}

export interface Btn {
  props?: ButtonProps;
}

export interface ConfigSchema{
  props: {
    name?: string;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    initialValues?: Store;
    onFinish?: (value: Record<any, any>) => void
  };
  children: FormItem[],
  btns?: Btn[]
}


export interface XFormProps{
  config: ConfigSchema;
}