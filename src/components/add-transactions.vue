<template>
  <h3>Adicionar Transação</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Descrição</label>
      <input
        type="text"
        id="text"
        v-model="text"
        placeholder="Descrição da transação"
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Valor <br />
        (negativo - despesa, positivo - renda)</label
      >
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Insira o valor"
      />
    </div>
    <button class="btn">Adicionar transação</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const amount = ref('')

const onSubmit = () => {
  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Por favor, adicione uma descrição e valor')
  } else {
    console.log(text.value, amount.value)
  }
}
</script>
