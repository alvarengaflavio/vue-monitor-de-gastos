<template>
  <h3>Histórico de Transações</h3>
  <ul id="list" class="list">
    <li
      v-for="(transaction, index) in props.transactions"
      v-bind:key="index"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.text }} <span>R$ {{ transaction.amount }}</span>
      <button @click="handleDelete(transaction.id)" class="delete-btn">
        x
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TransactionList } from '../utils/types'
import { PropType } from 'vue'

const props = defineProps({
  transactions: {
    type: Array as PropType<TransactionList>,
    required: true,
  },
})

const emit = defineEmits(['delete-transaction'])

const handleDelete = (id: string) => {
  emit('delete-transaction', id)
}
</script>
