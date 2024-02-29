/* eslint-disable no-console */
/* eslint-disable no-undef */
import storage from '@system.storage'
import { KEYS } from './const'

export function getMemoList() {
  return new Promise((resolve, reject) => {
    storage
      .get({ key: KEYS.MEMO_LIST_KEY })
      .then(ret => {
        if (ret.data) {
          resolve(JSON.parse(ret.data))
        } else {
          resolve([])
        }
      })
      .catch(err => {
        console.log('get MemoList fail', err)
        reject(err)
      })
  })
}

export function setMemoList(list) {
  storage.set({
    key: KEYS.MEMO_LIST_KEY,
    value: JSON.stringify(list),
    /*success: data => {
      console.log('set MemoList success', data)
    },
    fail: err => {
      console.log('set MemoList fail', err)
    }*/
  })
}
