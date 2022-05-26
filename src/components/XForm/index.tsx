/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:30:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 18:28:14
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/components/XForm/index.tsx
 * @Description: update here
 */
import { Form, message, Button } from 'antd';
import { formSet } from './effect';
import { ItemTypeSets } from './type'

import type { FC } from 'react';
import type { FormItemProps } from 'antd'
import type { XFormProps, FormItem, Btn } from './type'

const { Item } = Form  

const CHECKED_NAME_LIST = [ItemTypeSets.Switch]

export const XItem: FC<FormItem> = ({
  label,
  name,
  required,
  message,
  type,
  wrapProps = {},
  props
}) => {
  let rules = [];
  if(required){
    rules.push({
      required: true,
      message: message || '这一项是必填的呢'
    })
  }
  const itemProps: FormItemProps = {
    label,
    name,
    rules: wrapProps.rules || rules,
  }
  if(CHECKED_NAME_LIST.includes(type)){
    itemProps.valuePropName = 'checked'
  }
  const TargetComponent = formSet.get(type);
  return (
    <Item {...itemProps}>
      <TargetComponent {...props}/>
    </Item>
  )
}

export const XBtn: FC<Btn> = ({ props }) => {
  return (
    <Button type="primary" {...props}>
      {props?.children || '提交'}
    </Button>
  )
} 

export const XForm: FC<XFormProps> = ({ config }) => {
  const { props = {}, children = [], btns} = config;
  const formProps = {
    ...props,
    onFinish: (values: Record<any, any> = {}) => {
      console.log('values', values)
      props.onFinish && props.onFinish(values)
    },
    onFinishFailed: (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    }
  }
  const childrenUI = children.map(childItem => (
    <XItem {...childItem}/>
  ))
  return (
    <Form  {...formProps} >
      {childrenUI}
      {btns && (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {btns.map(btn => <XBtn {...btn}/>)}
        </Form.Item>
      )}
    </Form>
  )
}

export default XForm
