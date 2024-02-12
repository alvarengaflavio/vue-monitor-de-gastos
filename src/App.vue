<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses />
    <TransactionList :transactions="transactions" />
    <AddTransactions />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import Balance from './components/balance.vue'
import IncomeExpenses from './components/income-expenses.vue'
import TransactionList from './components/transaction-list.vue'
import AddTransactions from './components/add-transactions.vue'

import { ref, computed } from 'vue'

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
</script>
