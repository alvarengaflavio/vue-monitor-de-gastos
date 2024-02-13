<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" />
    <AddTransactions @add-transaction="handleAddTransaction" />
  </div>
</template>

<script setup lang="ts">
import AddTransactions from './components/add-transactions.vue'
import Balance from './components/balance.vue'
import Header from './components/header.vue'
import IncomeExpenses from './components/income-expenses.vue'
import TransactionList from './components/transaction-list.vue'

import { computed, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { Transaction } from './utils/types'

const toast = useToast()

const transactions = ref([
  { id: 1, text: 'Flores', amount: -20 },
  { id: 2, text: 'Salário', amount: 300 },
  { id: 3, text: 'Livro', amount: -10 },
  { id: 4, text: 'Câmera', amount: 150 },
])

const total = computed(() => {
  return transactions.value
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2)
})

const income = computed(() => {
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
  transactions.value.push(transaction)
  toast.success('Transação adicionada com sucesso')
}
</script>
