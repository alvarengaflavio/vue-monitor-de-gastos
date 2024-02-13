<template>
  <div class="inc-exp-container">
    <div>
      <h4>Renda</h4>
      <p id="money-plus" class="money plus">R$ {{ props.income }}</p>
    </div>
    <div>
      <h4>Despesas</h4>
      <p id="money-minus" class="money minus">R$ {{ props.expense }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  income: {
    type: String,
    required: true,
  },
  expense: {
    type: String,
    required: true,
  },
})
</script>
