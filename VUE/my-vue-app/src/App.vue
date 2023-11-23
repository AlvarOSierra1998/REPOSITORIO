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


/***

beforeCreate
Es el primer estado del ciclo de vida que se ejecuta. En este caso, nuestro componente se ha instanciado, pero no se ha añadido reactividad, ni inicializado las propiedades data
created:
En este caso, ya se ha creado el componente y se ha añadido reactividad. Buen momento para hacer una petición a un servicio externo, por ejemplo.
beforeMount:
En este hook, ya tenemos el template de nuestro componente compilado en la función render,
mounted:
Se considera que el componente está montado cuando se genera la propiedad $el, es decir, nuestro componente ha sido renderizado en el DOM. Otro buen momento para hacer una petición a un servicio externo.
beforeUpdate:
Se lanza cuando el componente detecta un cambio en sus datos, pero aún nuestro componente no ha sido renderizado de nuevo.
updated:
Se ha realizado un cambio en algún dato de nuestro componente, y se ha realizado el renderizado de nuevo en el Virtual DOM.
beforeDestroy:
Hook que se lanza cuando Vue detecta que el componente debe ser eliminado. Este hook se ejecuta antes de eliminar todas las referencias internas del componente.
destroyed:
El componente va a ser eliminado, y se han eliminado todas las referencias a los watchers, y listeners.



*/

