<template>
  <h4>Seu Saldo</h4>
  <h1 id="balance">R$ {{ props.total }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  total: {
    type: String,
    required: true,
  },
})
</script>
