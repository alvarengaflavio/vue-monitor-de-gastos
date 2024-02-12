<template>
  <Header />
  <div class="container">
    <Balance />
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

import { ref } from 'vue'

const transactions = ref([
  { id: 1, text: 'Flores', amount: -20 },
  { id: 2, text: 'Salário', amount: 300 },
  { id: 3, text: 'Livro', amount: -10 },
  { id: 4, text: 'Câmera', amount: 150 },
])
</script>
