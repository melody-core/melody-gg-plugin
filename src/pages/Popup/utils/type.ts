/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-26 10:21:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-26 10:24:00
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/utils/type.ts
 * @Description: update here
 */

export interface GetStoreData {
  (keyList: string | string[]): PromiseLike<Record<any, any>>
}


export interface GetAllStoreData {
  (): PromiseLike<Record<any, any>>
}

export interface SetStoreData {
  (data: Record<any, any>): void
}