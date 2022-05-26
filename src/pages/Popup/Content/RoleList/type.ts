/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 04:17:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-15 05:03:26
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Content/RoleList/type.ts
 * @Description: update here
 */

import type { Role, setCuRole } from './../../type'

export interface RoleListProps {
  roleList: Role[],
  setCuRole: setCuRole;
}