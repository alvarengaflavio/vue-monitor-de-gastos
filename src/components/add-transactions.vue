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
        type="text"
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
import { useToast } from 'vue-toastification'

const text = ref('')
const amount = ref('')
const toast = useToast()

const onSubmit = () => {
  try {
    if (text.value.trim() === '' || amount.value.trim() === '') {
      throw new Error('Por favor, adicione uma descrição e valor')
    }

    if (isNaN(parseFloat(amount.value))) {
      throw new Error('Por favor, insira um valor numérico')
    }

    console.log(text.value, amount.value)

    text.value = ''
    amount.value = ''
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message || 'Erro ao adicionar transação')
    } else {
      toast.error('Erro ao adicionar transação')
    }
  }
}
</script>
