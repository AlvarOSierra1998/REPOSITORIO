<template lang="">
  <div>
    <h1 :class="selector">Hola {{ nombre }}</h1>
    <p>mi edad es {{edad}}</p>
    <button @click="saludar(nombre)" >Aceptar</button>
  </div>
</template>

<style scoped >
.azul{
  color: rgb(24, 86, 193);
}
</style>

<script setup>
const nombre = "Alvaro";
const edad = 18
const color =  "color:green;font-size:3em;"
const selector = "azul"

const saludar = (miNombre)=>{
  alert(`Hola ${miNombre}`)
}
</script>

//https://www.youtube.com/watch?v=7f7nNgZOAUc