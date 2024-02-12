<template>
  <header>
    <nav>

    </nav>
  </header>

  <body>
    <main>
      <section class="gradiante">
        <div class="foto">
          <img src="./assets/img/Gbf_relink_logo.png" alt="Imagen">
        </div>
        <div style="overflow: hidden;">
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"
            style="fill: #ffffff; width: 101%; height: 132px; transform: rotate(180deg);">
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25" />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5" />
            <path
              d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
      </section>

      <!--MAIN-->
      <section>
        <h1>Characters</h1>
        <!--lista perosnajes-->
        <!---VASERAGA-->
        <div>
          <div class="botones">
            <button @click="mostrarVaseraga" :class="{ vaseragaB: mostrarVaseraga }">
              <h2>VASERAGA</h2>
            </button>
          </div>
          <div v-if="mostrarInfo" :class="{ vaseragaInfo: mostrarInfo }">
            <img class="imgvas" src="./assets/img/vaseraga.png" alt="Vaseraga">
            <blockquote class="txtVa">
              <p>
                <q>
                  <i>
                    This towering Draph warrior belongs to the Society, an organization which hunts primal beasts. He has
                    formed a contract with the seal weapon known as Great Scythe Grynoth.
                  </i>
                </q>
              </p>

              <!---Stats--->
              <button @click="stats">Stats</button>
              <ul v-if="estadisticasInfo">
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ul>

              <!---WEAPON-->
              <button @click="weapon">Weapon</button>
              <!--grynoth-->
              <div v-if="grynothOn">
                <div class="table-title">
                  <h2><i>Great Scythe Grynot.</i></h2>
                </div>
                <table class="table-fill">
                  <thead>
                    <tr>
                      <td class="tdinfoV">
                        Restricted file - code name: Grynoth. A massive scythe of lunar origin. This seal weapon
                        harnesses ethereal darkness. While Grynoth augments its contractor's endurance, it has a tendency
                        to over-amplify the wielder's animosity. Great care must be taken in choosing Grynoth's
                        contractor.
                      </td>
                      <td>
                        <img class="grynoth" src="./assets/img/Grynoth.png" alt="Grynoth">
                      </td>


                    </tr>
                    <tr>
                      <th class="text-left">Stats</th>
                      <th class="text-left">Level 1</th>
                      <th class="text-left">Level 100</th>
                    </tr>
                  </thead>
                  <tbody class="table-hover">
                    <tr>
                      <td class="text-left">HP</td>
                      <td class="text-left">39</td>
                      <td class="text-left">253</td>
                    </tr>
                    <tr>
                      <td class="text-left">ATK</td>
                      <td class="text-left">401</td>
                      <td class="text-left">2321</td>
                    </tr>
                    <tr>
                      <td class="text-left">C.A<sup>x</sup></td>
                      <td class="text-left">??</td>
                      <td class="text-left">??</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      <section>
        <div>
          <!---<div>
          <input v-model="nombreBuscado" placeholder="Escribe el nombre">
          <button @click="buscarProducto">Buscar</button>

          <div v-if="productoEncontrado">
            <p>ID: {{ productoEncontrado.id }}</p>
            <p>Nombre: {{ productoEncontrado.name }}</p>
            <p>Precio: {{ productoEncontrado.price }}</p>
            <p>Categoría: {{ productoEncontrado.category }}</p>
          </div>
          <div v-else>
            <p>No se encontró información para el nombre proporcionado.</p>
          </div>
        </div>--
          <h2>Agregar Elementos</h2>

          <input type="text" v-model="nuevoElemento" @keyup.enter="agregarElemento" placeholder="Ingrese un elemento">

          <div>
            <ul>
              <li v-for="(elemento, index) in elementos" :key="index">{{ elemento }}</li>

            </ul>
            <button @click="limpiarLista"> Team Reset </button>
          </div>

          <input type="text" v-model="nuevoEl" @keyup.enter="addItems" placeholder="Ingrese un item">-->

          <!--PRUEBA>-->
          <div>
            <label for="productName">Ingrese el nombre del producto:</label>
            <input v-model="productName" id="productName" />

            <button @click="searchProduct">Buscar Producto</button>

            <div v-if="foundProducts.length > 0">
              <h3>Productos Encontrados:</h3>
              <div v-for="(product, index) in foundProducts" :key="index" class="product-info">
                <div v-if="product.img">
                  <img :src="product.img" alt="Product Photo" class="product-photo" />
                </div>
                <p>
                <h2>Nombre: {{ product.name }}</h2>
                </p>
                <p>
                <h2>Precio: {{ product.price }}</h2>
                </p>
                <p>
                <h2>Categoría: {{ product.category }}</h2>
                </p>

                <hr />
              </div>
              <button @click="Eliminar(index)">Delete</button>
              <button @click="clearResults">Limpiar Resultados</button>
            </div>
            <div v-else>
              <p>No se encontró ningún producto con ese nombre.</p>
            </div>
          </div>


        </div>


      </section>
    </main>
  </body>
</template>




<script setup>
import { ref } from 'vue';


/*const nombreBuscado = ref('');
const productoEncontrado = ref(null);

const buscarProducto = async () => {
  try {
    const response = await fetch('./personajes.json'); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API.

    if (response.ok) {
      const data = await response.json();
      productoEncontrado.value = data.productos.find(producto => producto.name === nombreBuscado.value);
      console.log('Data from API:', data);
    } else {
      console.error('Error al obtener datos:', response.statusText);
    }
    if (!response.ok) {
      console.error('Error al obtener datos:', response.status, response.statusText);
      const errorData = await response.text();  // Obtener el contenido del error
      console.error('Error Data:', errorData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};*/




//statsVASE
const estadisticasInfo = ref(false);
const stats = () => {
  estadisticasInfo.value = !estadisticasInfo.value
};

//infoVASE
const mostrarInfo = ref(false);
const mostrarVaseraga = () => {
  mostrarInfo.value = !mostrarInfo.value;
};

const grynothOn = ref(false);
const weapon = () => {
  grynothOn.value = !grynothOn.value;
};

//PRUEBA

const products = [
  {
    "name": "Vaseraga",
    "price": 19.99,
    "category": "Electrónicos",
    "img": "https://gbf.wiki/images/thumb/b/b1/Npc_zoom_3040029000_01.png/480px-Npc_zoom_3040029000_01.png"
    //"img": "../src/assets/img/vaseraga.png"
  },
  {
    "id": 2,
    "name": "Io",
    "price": 29.99,
    "category": "Ropa",
    "img": "https://gbf.wiki/images/thumb/b/b1/Npc_zoom_3040029000_01.png/480px-Npc_zoom_3040029000_01.png"

  },
  {
    "id": 3,
    "name": "Producto C",
    "price": 9.99,
    "category": "Hogar"
  },
  {
    "id": 4,
    "name": "Producto D",
    "price": 39.99,
    "category": "Electrónicos"
  }
];

const productName = ref('');
const foundProducts = ref([]);


const searchProduct = () => {
  const product = products.find(p => p.name.toLowerCase() === productName.value.toLowerCase());
  if (product) {
    foundProducts.value = [...foundProducts.value, product];

  }
};
const clearResults = () => {
  foundProducts.value = [];
};
const Eliminar = (index) => {
  foundProducts.value.splice(index, 1);
};
















//ELEMENTOS
/*
const nuevoElemento = ref('');
const elementos = ref([]);

const agregarElemento = () => {
  if (nuevoElemento.value.trim() !== '') {
    elementos.value.push(nuevoElemento.value);
    nuevoElemento.value = ''; // Limpiar el input después de agregar
  }
};


const limpiarLista = () => {
  elementos.value = []
}*/

</script>




<!--estilos solo para funciones-->
<style scoped >


.product-info {
  display: inline-block;
  margin: auto;
}

.vaseragaB {
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  margin-bottom: 10px;
}

.vaseragaB:hover {
  transition: all .3 ease;
  background-color: black;
  color: #ac12db;
  padding: 1em;
  border-radius: 10px;
}

.vaseragaInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(270deg, #362654, #e2d9f5, #42375a, #5c2b6b);
  background-size: 800% 800%;

  -webkit-animation: FondoGradianteVaseraga 17s ease infinite;
  -moz-animation: FondoGradianteVaseraga 17s ease infinite;
  -o-animation: FondoGradianteVaseraga 17s ease infinite;
  animation: FondoGradianteVaseraga 17s ease infinite;
}

/*ANIMACIONVASERAGA*/
@-webkit-keyframes FondoGradianteVaseraga {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes FondoGradianteVaseraga {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

@-o-keyframes FondoGradianteVaseraga {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

@keyframes FondoGradianteVaseraga {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}
</style>

