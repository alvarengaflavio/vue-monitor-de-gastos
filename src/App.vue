<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import Balance from './components/balance.vue'
import IncomeExpenses from './components/income-expenses.vue'
import TransactionList from './components/transaction-list.vue'
</script>
