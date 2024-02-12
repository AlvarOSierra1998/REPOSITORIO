
<template>
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
                <button @click="mostrarVane" :class="{ vaneB: mostrarVane }">
                    <h2>Vane</h2>
                </button>
                <button @click="mostrarKatalina" :class="{ vaseragaB: mostrarKatalina }">
                    <h2>Katalina</h2>
                </button>
                <button @click="mostrarPercival" :class="{ vaseragaB: mostrarPercival }">
                    <h2>Percival</h2>
                </button>
                <button @click="mostrarIo" :class="{ vaseragaB: mostrarIo }">
                    <h2>Io</h2>
                </button>
                <button @click="mostrarYodarha" :class="{ vaseragaB: mostrarYodarha }">
                    <h2>Yodarha</h2>
                </button>
                <button @click="mostrarRackam" :class="{ vaseragaB: mostrarRackam }">
                    <h2>Rackam</h2>
                </button>
                <button @click="mostrarEugen" :class="{ vaseragaB: mostrarEugen }">
                    <h2>Eugen</h2>
                </button>
                <button @click="mostrarRosetta" :class="{ vaseragaB: mostrarRosetta }">
                    <h2>Rosetta</h2>
                </button>
                <button @click="mostrarLancelot" :class="{ vaseragaB: mostrarLancelot }">
                    <h2>Lancelot</h2>
                </button>
                <button @click="mostrarSiegfried" :class="{ vaseragaB: mostrarSiegfried }">
                    <h2>Siegfried</h2>
                </button>
                <button @click="mostrarCharlotta" :class="{ vaseragaB: mostrarCharlotta }">
                    <h2>Charlotta</h2>
                </button>
                <button @click="mostrarNarmaya" :class="{ vaseragaB: mostrarNarmaya }">
                    <h2>Narmaya</h2>
                </button>
                <button @click="mostrarZeta" :class="{ vaseragaB: mostrarZeta }">
                    <h2>Zeta</h2>
                </button>
                <button @click="mostrarFerry" :class="{ vaseragaB: mostrarFerry }">
                    <h2>Ferry</h2>
                </button>
                <button @click="mostrarGha" :class="{ vaseragaB: mostrarGha }">
                    <h2>Ghandagoza</h2>
                </button>
                <button @click="mostrarCagli" :class="{ vaseragaB: mostrarCagli }">
                    <h2>Cagliostro</h2>
                </button>

            </div>
            <div v-if="mostrarInfo" :class="{ vaseragaInfo: mostrarInfo }">
                <img class="imgvas" src="../assets/img/vaseraga.png" alt="Vaseraga">
                <blockquote class="txtVa">
                    <p>
                        <q>
                            <i>
                                This towering Draph warrior belongs to the Society, an organization which hunts primal
                                beasts. He has
                                formed a contract with the seal weapon known as Great Scythe Grynoth.
                            </i>
                        </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsV">Stats</button>
                    <ul v-if="estadisticasInfo">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="weaponV">Weapon</button>
                    <!--grynoth-->
                    <div v-if="grynothOn">
                        <div class="table-title">
                            <h2><i>Great Scythe Grynot.</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        Restricted file - code name: Grynoth. A massive scythe of lunar origin. This seal
                                        weapon
                                        harnesses ethereal darkness. While Grynoth augments its contractor's endurance, it
                                        has a tendency
                                        to over-amplify the wielder's animosity. Great care must be taken in choosing
                                        Grynoth's
                                        contractor.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/Grynoth.png" alt="Grynoth">
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

    <!---VANE---->
    <section>
        <!--lista perosnajes-->

        <!---VANE---->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoV" :class="{ VaneInfo: mostrarInfoV }">
                <img class="imgvas" src="../assets/img/Vane.png" alt="Vane">
                <blockquote class="txtVa">
                    <p>
                        <q>
                            <i>
                                Knight of Fellowship
                                A knight of valor, he pours his heart and soul into protecting his homeland, his friends,
                                and his comrades-in-arms.

                            </i>
                        </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsVane">Stats</button>
                    <ul v-if="estadisticasInfoVan">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="alabardaOn">Weapon</button>
                    <!--grynoth-->
                    <div v-if="alabardaVane">
                        <div class="table-title">
                            <h2><i>Alabarda.</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        For one aspiring youth, the halberd was the obvious weapon of choice. This one ins't
                                        the fastest or sharpest around, but wielded correctly, it's nigh unbreakable. But
                                        for him it's not about being the greatest. It's about fighting with friends on the
                                        front lines and letting them know they'll never be alone.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/alabarda.png" alt="Alabarda">
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
</template>

<script setup>
import { ref } from 'vue';
//statsVASE
const estadisticasInfo = ref(false);
const statsV = () => {
    estadisticasInfo.value = !estadisticasInfo.value
};

//infoVASE
const mostrarInfo = ref(false);
const mostrarVaseraga = () => {
    mostrarInfo.value = !mostrarInfo.value;
};

const grynothOn = ref(false);
const weaponV = () => {
    grynothOn.value = !grynothOn.value;
};

///////////////////////////////////////////////////////////

//infoVANE
const estadisticasInfoVan = ref(false);
const statsVane = () => {
    estadisticasInfoVan.value = !estadisticasInfoVan.value
};
const mostrarInfoV = ref(false);
const mostrarVane = () => {
    mostrarInfoV.value = !mostrarInfoV.value;
};

//weaponVane
const alabardaVane = ref(false);
const alabardaOn = () => {
    alabardaVane.value = !alabardaVane.value;
};

</script>

<style scoped>
.vaseragaB {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 10px;
}

.weapon {
    width: 200%;
    margin: auto;
    display: flex;
    border-radius: 20%;



}

.vaseragaB:hover {
    transition: all .3 ease;
    background-color: black;
    color: #ac12db;
    padding: 1em;
    border-radius: 10px;
}


.vaneB::before,
.vaneB::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(89,202,216,0.8) 0%, rgba(89,202,216,0) 70%);
    background-position: bottom;
    opacity: 0;
    transition: opacity .3s ease, background-position .3s ease;
}

.vaneB::before {
    top: 0;
    left: 0;
}

.vaneB::after {
    bottom: 0;
    right: 0;
}

.vaneB:hover::before,
.vaneB:hover::after {
    opacity: 1;
    background-position: top;
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

/*.vaneB{
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    width: 8%;
}
.vaneB:hover {
    transition: all .3 ease;
    background-image: linear-gradient(to top, rgba(89,202,216,0.8) 0%, rgba(89,202,216,0) 70%);
    color: #ff9306;
    border-radius: 10px;
    
    
}*/
.vaneB {
    position: relative;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease;
    width: 8%;
}

.vaneB::before,
.vaneB::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(89,202,216,0.8) 0%, rgba(89,202,216,0) 70%);
    background-position: bottom;
    opacity: 0;
    border-radius: 10px;
    transition: opacity .3s ease, background-position .3s ease;
}

.vaneB::before {
    top: 0;
    left: 0;
}

.vaneB::after {
    bottom: 0;
    right: 0;
}

.vaneB:hover::before,
.vaneB:hover::after {
    opacity: 1;
    background-position: top;
}

.VaneInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(270deg, #9ac4c1, #f1e392, #ffffff, #c7520e);
    background-size: 800% 800%;

    -webkit-animation: FondoGradianteVane 17s ease infinite;
    -moz-animation: FondoGradianteVane 17s ease infinite;
    -o-animation: FondoGradianteVane 17s ease infinite;
    animation: FondoGradianteVane 17s ease infinite;
}

/*ANIMACIONVANE*/
@-webkit-keyframes FondoGradianteVane {
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

@-moz-keyframes FondoGradianteVane {
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

@-o-keyframes FondoGradianteVane {
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

@keyframes FondoGradianteVane {
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

/**/</style>