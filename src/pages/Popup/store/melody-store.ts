/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-24 17:17:20
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-25 13:45:25
 * @FilePath: /vue2-vite-ts/Users/wxy/codeWorks/sp-pub/sp-clis/sp-gg-plugin/src/pages/Popup/store/melody-store.ts
 * @Description: update here
 */

import type {  EventStoreListItem, EventOn, EventEmit, EventRemove } from './type'

export default class EventStore {
  eventList: EventStoreListItem[] = []; 
  on: EventOn = (key, callback) => {
      const findItem = this.eventList.find(item=>item.key===key);
      findItem? 
          findItem.callbackList.push(callback)
          : 
          this.eventList.push({
              key,
              callbackList: [callback]
          })
  }
  emit: EventEmit = (key, ...args)=>{
      const findItem = this.eventList.find(item=>item.key===key);
      findItem && findItem.callbackList.forEach(item => item && item(...args));
  }
  removeEvent: EventRemove = (key) => {
      const findIndex = this.eventList.findIndex(item=>item.key===key);
      if(findIndex >= 0) {
        this.eventList.splice(findIndex, 1);
      }
  }
}
