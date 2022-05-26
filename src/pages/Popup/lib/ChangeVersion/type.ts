/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 17:04:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 15:21:57
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/lib/ChangeVersion/type.ts
 * @Description: update here
 */


export enum ChangeVersionKeys{
  is_open = 'is_open',
  version_tag = 'version_tag',
}

export interface ChangeVersionBaseProps {
  onFinish: (values?: Record<any, any>) => void
  [ChangeVersionKeys.is_open]: boolean,
  [ChangeVersionKeys.version_tag]: string
}
