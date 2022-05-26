/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 05:00:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-15 05:15:04
 * @FilePath: /sp-gg-plugin/src/pages/Popup/type.ts
 * @Description: update here
 */

export interface Role{
  roleName: string,
  role: number
}
export type setCuRole = (role: Role) => () => void
