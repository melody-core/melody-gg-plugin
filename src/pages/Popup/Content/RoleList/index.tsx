/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 04:16:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-15 05:23:10
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Content/RoleList/index.tsx
 * @Description: update here
 */
import { FC } from 'react';

import type { RoleListProps } from './type'
import styles from './index.module.css'



const RoleList: FC<RoleListProps> =({roleList, setCuRole}) => {
  const renderRoleList = () => {
    return roleList.map((item)=>{
      return (
        <div className={styles['role-item-wrap']}>
          <a className={styles['role-item']} key={item.role} onClick={setCuRole(item)}>
            {item.roleName}
          </a>
          <div className={styles['role-item-line']} />
        </div>
      )
    })
  }
  const roleListUI = renderRoleList()
  return (
    <div className={styles['role-list-ui']}>
      <h4>选择角色</h4>
      <div className={styles['role-list-wrap']}>
        {roleListUI}
      </div>
    </div>
  )
}

export default RoleList;