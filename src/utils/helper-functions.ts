import { Ref } from 'vue'
import { Transaction } from './types'

export const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  )

export const saveToLocalStorage = (transactions: Ref<Transaction[]>) => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
