


import Header from './Header'
import Content from './Content'
import ExtendInterface from './ExtendInterface'

import { useUserInfo } from './effect'

import styles from './index.module.css'
import 'antd/dist/antd.css';


function Popup() {
  const {
    isLogin,
    userInfo,
    getUserInfo,
    currentRole,
    setCuRole
  } = useUserInfo();

  return (
    <div className={styles['flex-wrap']}>
      <div className={styles['popup-wrap']}>
        <Header isLogin={isLogin} userInfo={userInfo} currentRole={currentRole} getUserInfo={getUserInfo}/>
        <Content setCuRole={setCuRole} currentRole={currentRole}/>
      </div>
      <div className={styles['extend-wrap']}>
        <ExtendInterface />
      </div>
    </div>
  )
}

export default Popup
