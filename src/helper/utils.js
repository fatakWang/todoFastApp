/* eslint-disable no-undef */
/* eslint-disable no-console */
import storage from '@system.storage'
import { KEYS } from './const'



export function clearMemoList() {
  storage.delete({
    key: KEYS.MEMO_LIST_KEY,
    success: data => {
      console.log('delete MemoList success', data)
    },
    fail: err => {
      console.log('delete MemoList fail', err)
    }
  })
}
