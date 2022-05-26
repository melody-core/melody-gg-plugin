/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 02:23:06
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-16 01:18:40
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Header/index.tsx
 * @Description: update here
 */

import { Avatar, Layout } from 'antd';
import { FC } from 'react';

import { UserOutlined } from '@ant-design/icons';

import type {HeaderProps} from './type'

import styles from './index.module.css'
import 'antd/dist/antd.css';




const Header:FC<HeaderProps> = ({ isLogin, userInfo = {}, getUserInfo, currentRole }) => {
  return (
      <Layout.Header className={styles['popup-header-wrap']} style={{padding: '0 15px'}}>
        <div className={styles['role-name']}>{currentRole?.roleName || '请先选择角色'}</div>
        {isLogin ? (
          <div className={styles['header-wrap']}>
            <Avatar size="large" icon={<UserOutlined />} />
            <div className={styles['user-name']}>name</div>
          </div>
        ): (
          <a onClick={getUserInfo}>登录账号</a>
        )}
      </Layout.Header>

  )
}

export default Header
