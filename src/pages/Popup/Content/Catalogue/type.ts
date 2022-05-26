/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-16 01:12:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 16:52:15
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/Content/Catalogue/type.ts
 * @Description: update here
 */

import { Key } from "react";
import { setCuRole } from "../../type";

export interface CatalogueProps{
  setCuRole: setCuRole;
}

export type SelectKeyLib = keyof (typeof import('./../../lib'))

export interface HandleFuncSelect {
  (selectKeys: Key[], info: Record<any, any>): void
}
