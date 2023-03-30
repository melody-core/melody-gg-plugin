/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-25 13:29:36
 * @LastEditors: xinyu_wang06 xinyu.wang06@mihoyo.com
 * @LastEditTime: 2023-03-30 11:53:44
 * @FilePath: /sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/ExtendInterface/effect.ts
 * @Description: update here
 */

import { useState, useEffect, useRef } from "react";

import eventStore from "../store";
import { CatalogueEventSet } from '../store/eventSet';
import * as FuncLibModules from './../lib';
import { getAllStoreData, setStoreData } from '../utils/storage';


import type { SelectKeyLib } from "../Content/Catalogue/type";

/**
 * 
 * @desc 功能列表tabs的处理 
 */
export const useFuncList = () => {
  const keyRenderIndexRef = useRef<number>(0);
  const defaultTabActiveKeyRef = useRef('');
  const funcListRef = useRef<Record<any,any>[]>([]);
  const [showFuncList, setFuncList] = useState<Record<any,any>[]>([]);
  // 同步缓存数据
  useEffect(()=>{
    getAllStoreData()
      .then((res = {}) => {
        for(const i in res){
          const belonging = i.replace('-config', '') as SelectKeyLib
          const { Base, configular} = FuncLibModules[belonging] || {}
          const { title, configType }  = configular?.default || {} 
          const onFinish = async (updateValues: Record<any, any>) => {
            await setStoreData({
              [`${belonging}-config`]: updateValues
            })
            eventStore.emit(CatalogueEventSet.FuncConfigSave, {
              belonging,
              values: updateValues,
            })
          }
          funcListRef.current.push({
            Base: Base.default,
            values: res[i],
            belonging,
            onFinish,
            title,
            configType
          })
        }
        const newShowFuncList = funcListRef.current.filter((item)=>item.values?.is_open === true)
        setFuncList([...newShowFuncList])
      })
  }, [])
  // 与功能列表进行同步通信
  useEffect(()=>{
    eventStore.on(CatalogueEventSet.FuncConfigSave, (...args) => {
      keyRenderIndexRef.current = keyRenderIndexRef.current + 1;
      const funcList = funcListRef.current;
      const { belonging } = args[0];
      defaultTabActiveKeyRef.current = belonging;
      const targetIndex = funcList.findIndex(item => item.belonging === belonging);
      if(targetIndex > -1){
        funcList[targetIndex] = {
          ...funcList[targetIndex],
          ...args[0]
        }
      }else{
        const onFinish = async (updateValues: Record<any, any>) => {
          await setStoreData({
            [`${belonging}-config`]: updateValues
          })
          eventStore.emit(CatalogueEventSet.FuncConfigSave, {
            ...args[0],
            values: updateValues,
          })
        }
        funcList.push({
          ...args[0],
          Base: FuncLibModules[belonging as SelectKeyLib].Base.default,
          onFinish
        })
        funcListRef.current = funcList;
      }
      const newShowFuncList = funcList.filter((item)=>item.values?.is_open === true)
      setFuncList([...newShowFuncList])
    });
    return () => {
      eventStore.removeEvent(CatalogueEventSet.FuncConfigSave);
    }
  }, [])

  return {
    funcList: showFuncList,
    keyRenderIndex: keyRenderIndexRef.current,
    defaultTabActiveKey: defaultTabActiveKeyRef.current
  }
}