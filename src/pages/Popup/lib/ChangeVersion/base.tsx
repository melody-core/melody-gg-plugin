/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 18:09:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 17:35:46
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/base.tsx
 * @Description: update here
 */

import XForm from '../../../../components/XForm'
import configular from './configular'

import type { FC } from 'react'
import type { ChangeVersionBaseProps } from './type'



export const Base: FC<ChangeVersionBaseProps> = ({
  is_open,
  version_tag,
  onFinish,
}) => {
  console.log('re-render---')
  return (
    <div>
      <XForm config={{
        ...configular.config,
        props: {
          ...configular.config.props,
          name: `${configular.config.props.name || configular.belonging}_base`,
          initialValues: {
            is_open,
            version_tag,
          },
          onFinish
        }
      }}/>
    </div>
  )
}


export default Base;