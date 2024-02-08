<template>
  <h3>Adicionar Transação</h3>
  <form id="form">
    <div class="form-control">
      <label for="text">Descrição</label>
      <input type="text" id="text" placeholder="Descrição da transação" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Valor <br />
        (negativo - despesa, positivo - renda)</label
      >
      <input type="number" id="amount" placeholder="Insira o valor" />
    </div>
    <button class="btn">Adicionar transação</button>
  </form>
</template>
