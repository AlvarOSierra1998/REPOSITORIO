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
        <h1>Personajes</h1>
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
              <button>Stats</button>
              <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ul>

              <!---WEAPON-->
              <button>Weapon</button>
              <!--grynoth-->
              <img src="" alt="">

            </blockquote>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>




<script setup>
import { ref } from 'vue';


const mostrarInfo = ref(false);
const mostrarVaseraga = () => {
  mostrarInfo.value = !mostrarInfo.value;
};

</script>

<!--estilos solo para funciones-->
<style scoped >
.vaseragaB {
  background: transparent;
  outline: none;
  border: none;

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
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes FondoGradianteVaseraga {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-o-keyframes FondoGradianteVaseraga {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes FondoGradianteVaseraga {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}


</style>

