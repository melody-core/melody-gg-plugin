/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-25 10:09:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-27 14:01:28
 * @FilePath: /sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/Content/Catalogue/effect.ts
 * @Description: update here
 */



import { useState, useEffect, useCallback } from 'react';

import * as FUNC_LIST from '../../lib'
import eventStore from '../../store';
import { getStoreData, setStoreData } from '../../utils/storage';
import { CatalogueEventSet } from '../../store/eventSet';


import type { ConfigSchema } from '../../../../components/XForm/type';
import type { HandleFuncSelect, SelectKeyLib } from './type'
import type { Store } from 'antd/lib/form/interface';
import { message } from 'antd';

/**
 * 
 * @desc 选中功能，侧边功能展示栏进行配置同步 
 */
export const useFunctionSelect = () => {
  const [isShowModal, setShowModal] = useState(false);
  const [configSchema, setConfigSchema] = useState<ConfigSchema>();
  const [modalTitle, setModalTitle] = useState('');
  const modalContrulor = (showModal: boolean) => () => {
    setConfigSchema(undefined);
    setShowModal(showModal)
  }
  const handleFuncSelect: HandleFuncSelect = async (selectKeys) => {
    if(!selectKeys[0]){
      return ;
    }
    const targetModule = FUNC_LIST[<SelectKeyLib>selectKeys[0]];
    if(!targetModule){
      return ;
    }
    const { configular } = targetModule;
    const { default: {
      modalTitle: modal_title,
      title,
      config,
      belonging,
      configType
    } } = configular
    let targetStoreData: Store  = {}
    try {
      const storeList = await getStoreData([`${belonging}-config`]) as Store
      targetStoreData = storeList[`${belonging}-config`];
    } catch (error: any) {
      message.error(error);
    }
    
    const formConfigSechema = {
      ...config,
      props: {
        ...config.props,
        onFinish: async (values: any) => {
          try {
            await setStoreData({
              [`${belonging}-config`]: values
            })
          } catch (error: any) {
            message.error(error);
            return ;
          }
          eventStore.emit(CatalogueEventSet.FuncConfigSave, {
            belonging,
            configType,
            title,
            values
          })
          modalContrulor(false)()
        },
        initialValues: targetStoreData || {} 
      }
    }
    setModalTitle(modal_title);
    setConfigSchema(formConfigSechema);
    setShowModal(true);
  }
  return {
    isShowModal,
    handleFuncSelect,
    configSchema,
    modalTitle,
    modalContrulor
  }
}