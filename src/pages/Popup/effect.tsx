/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 02:25:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-16 00:14:45
 * @FilePath: /sp-gg-plugin/src/pages/Popup/effect.tsx
 * @Description: update here
 */

import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';

import MOCK_ROLES from './../../MOCK_DATA/roles.json';

import { Role } from './type';



export const useUserInfo = () => {
  const [isLogin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [currentRole, setCurrentRole] = useState(MOCK_ROLES[0]);
  const getUserInfo = useCallback(()=>{
    // todoSth
    message.warn('无法登录，等待运维接入此功能~')
  }, [])
  // useEffect(()=>{
  //   getUserInfo();
  // }, []);
  const setCuRole = useCallback((role: Role)=> () => {
    setCurrentRole(role);
  }, [])
  return {
    isLogin,
    userInfo,
    getUserInfo,
    currentRole,
    setCuRole
  }
}