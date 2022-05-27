/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-25 16:41:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-26 10:24:45
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/utils/storage.ts
 * @Description: update here
 */

import type { GetAllStoreData, GetStoreData, SetStoreData } from './type'


export const getStoreData: GetStoreData = (keyList) => new Promise((resolve, reject)=>{
  chrome.storage.sync.get(keyList, function(result) {
    if (chrome.runtime.lastError) {
      return reject(chrome.runtime.lastError);
    }
    resolve(result);
  });
})

export const getAllStoreData: GetAllStoreData = () => new Promise((resolve, reject)=>{
  chrome.storage.sync.get(null, function(result) {
    if (chrome.runtime.lastError) {
      return reject(chrome.runtime.lastError);
    }
    resolve(result);
  });
})

export const setStoreData: SetStoreData = (data) => new Promise((resolve, reject)=>{
  chrome.storage.sync.set(data, function() {
    if (chrome.runtime.lastError) {
      return reject(chrome.runtime.lastError);
    }
    resolve(null);
  });
})