<template lang="">
  <div>
    <h1 v-bind:class="selector">Hola {{ nombre }}</h1>
    <p>mi edad es {{edad}}</p>
  </div>
</template>

<style scoped >
.azul{
  color: blue;
}
</style>

<script setup>
const nombre = "Alvaro";
const edad = 18
const color =  "color:green;font-size:3em;"
const selector = "azul"
</script>