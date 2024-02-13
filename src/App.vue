<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList
      :transactions="transactions"
      @delete-transaction="handleDeleteTransaction"
    />
    <AddTransactions @add-transaction="handleAddTransaction" />
  </div>
</template>

<script setup lang="ts">
import AddTransactions from './components/add-transactions.vue'
import Balance from './components/balance.vue'
import Header from './components/header.vue'
import IncomeExpenses from './components/income-expenses.vue'
import TransactionList from './components/transaction-list.vue'

import { computed, onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Transaction } from './utils/types'
import { saveToLocalStorage } from './utils/helper-functions'

const toast = useToast()

const transactions = ref<Transaction[]>(new Array<Transaction>())

onMounted(() => {
  const data = localStorage.getItem('transactions')
  if (data) transactions.value = JSON.parse(data)
})

const total = computed(() => {
  if (transactions.value.length === 0) return '0.00'

  return transactions.value
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

const income = computed(() => {
  if (transactions.value.length === 0) return '0.00'

  return transactions.value
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

const expenses = computed(() => {
  return transactions.value
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

const handleAddTransaction = (transaction: Transaction) => {
  if (transactions.value.length === 0) {
    transactions.value = [transaction]
  } else {
    transactions.value.push(transaction)
  }

  saveToLocalStorage(transactions)
  toast.success('Transação adicionada com sucesso')
}

const handleDeleteTransaction = (id: string) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  )

  saveToLocalStorage(transactions)
  toast.info('Transação removida com sucesso')
}
</script>
