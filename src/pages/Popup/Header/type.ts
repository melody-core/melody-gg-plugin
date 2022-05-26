/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 04:49:33
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-15 05:02:41
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Header/type.ts
 * @Description: update here
 */

import type { Role } from './../type';


export interface HeaderProps{
  isLogin: boolean;
  userInfo: Record<any,any>;
  getUserInfo: ()=> void;
  currentRole: Role;
}