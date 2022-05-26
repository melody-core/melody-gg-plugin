/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 17:17:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-24 17:28:59
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/store/type.ts
 * @Description: update here
 */

export type EventKey = string | symbol

export interface EventMergeCallback {
  ([key]: any): void
}

export interface EventOn{
  (key: EventKey, callback: EventMergeCallback): void
}

export interface EventEmit{
  (key: EventKey, [arg]: any): void
}
export interface EventRemove{
  (key: EventKey): void
}

export interface EventStoreListItem {
  key: EventKey,
  callbackList: EventMergeCallback[]
}