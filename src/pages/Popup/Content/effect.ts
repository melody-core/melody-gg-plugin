/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 04:06:23
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-15 05:02:52
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Content/effect.ts
 * @Description: update here
 */

import { useState, useEffect } from 'react';
import MOCK_ROLES from './../../../MOCK_DATA/roles.json';

import type { Role } from './../type'

export const useRoleList = () => {
  const [roleList, setRoleList] = useState<Role[]>([]);
  useEffect(()=>{
    Promise.resolve(MOCK_ROLES)
      .then(roles=>{
        setRoleList(roles)
      })
  }, [])
  return {
    roleList
  }
}