<template>
    <section>
        <div>
            <!--TeamBuilder>-->
            <div>
                <label for="productName">
                    <h4>Team Builder</h4>
                </label>
                <input v-model="productName" @keyup.enter="searchProduct" id="productName"
                    placeholder="Type the name of the character to add to your team!" />



                <div v-if="foundProducts.length > 0" class="container-teambuilder">
                    <h2>Team:</h2>
                    <div v-for="(product, index) in foundProducts" :key="index" class="product-info ">
                        <div v-if="product.img">
                            <img :src="product.img" alt="Product Photo" class="product-photo" />
                        </div>
                        <p>
                        <h2>Name: {{ product.name }}</h2>
                        </p>
                        <p>
                        <h2>HP(lvl60): {{ product.HP }}</h2>
                        </p>
                        <p>
                        <h2>ATK(lvl60): {{ product.ATK }} </h2>
                        </p>
                        <p>
                        <h2>Element:<img :src="product.Element" alt="void"></h2>
                        </p>
                        <p class="margin-combat">
                        <h2>Combat Style: {{ product.combatStyle }} </h2>
                        </p>

                        <hr />
                    </div>
                    <button @click="Eliminar(index)">Delete</button>
                    <button @click="clearResults">Limpiar Resultados</button>
                </div>

                <div v-if="noMore">
                    <h2>{{ noMore }}</h2>
                </div>
            </div>



        </div>


    </section>
</template>




<script setup>
import { ref } from 'vue';







//PRUEBA

const products = [
    {
        "name": "Vaseraga",
        "HP": 5878,
        "ATK": 526,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/b/b1/Npc_zoom_3040029000_01.png/480px-Npc_zoom_3040029000_01.png",
        //"img": "../src/assets/img/vaseraga.png"
        "combatStyle": " Tank ",
    },
    {
        "name": "Vane",
        "HP": 6839,
        "ATK": 526,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/7/73/Npc_zoom_3030107000_01.png/480px-Npc_zoom_3030107000_01.png",
        "combatStyle": " Defense ",


    },
    {
        "name": "Katalina",
        "HP": 2368,
        "ATK": 404,
        "img": "https://gbf.wiki/images/thumb/9/9b/Npc_zoom_3030005000_01.png/480px-Npc_zoom_3030005000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS, Support ",
    },
    {
        "name": "Percival",
        "HP": 5279,
        "ATK": 646,
        "img": "https://gbf.wiki/images/thumb/d/d7/Npc_zoom_3040050000_01.png/480px-Npc_zoom_3040050000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS,Tank ",
    },
    {
        "name": "Lancelot",
        "HP": 5279,
        "ATK": 6263,
        "img": "https://gbf.wiki/images/thumb/1/14/Npc_zoom_3040023000_01.png/480px-Npc_zoom_3040023000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS, Trickster ",
    },
    {
        "name": "Charlotta",
        "HP": 6696,
        "ATK": 5417,
        "img": "https://gbf.wiki/images/thumb/b/b6/Npc_zoom_3040010000_01.png/480px-Npc_zoom_3040010000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS ",
    },
    {
        "name": "Zeta",
        "HP": 3359,
        "ATK": 6823,
        "img": "https://gbf.wiki/images/thumb/e/ef/Npc_zoom_3040028000_01.png/480px-Npc_zoom_3040028000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " Hybrid DPS-Defense ",
    },
    {
        "name": "Io",
        "HP": 1700,
        "ATK": 345,
        "img": "https://gbf.wiki/images/thumb/8/8e/Npc_zoom_3030006000_01.png/480px-Npc_zoom_3030006000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " Spellcaster, Healer ",
    },
    {
        "name": "Narmaya",
        "HP": 3362,
        "ATK": 8382,
        "img": "https://gbf.wiki/images/thumb/f/fc/Npc_zoom_3040063000_01.png/480px-Npc_zoom_3040063000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS ",
    },
    {
        "name": "Yodarha",
        "HP": 7302,
        "ATK": 556,
        "img": "https://gbf.wiki/images/thumb/0/02/Npc_zoom_3020030000_01.png/480px-Npc_zoom_3020030000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/wind-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS ",
    },
    {
        "name": "Rackam",
        "HP": 1896,
        "ATK": 225,
        "img": "https://gbf.wiki/images/thumb/c/c0/Npc_zoom_3030008000_01.png/480px-Npc_zoom_3030008000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS, Tank ",
    },
    {
        "name": "Eugen",
        "HP": 3177,
        "ATK": 427,
        "img": "https://gbf.wiki/images/thumb/f/f2/Npc_zoom_3030007000_01.png/480px-Npc_zoom_3030007000_01.png",
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "combatStyle": " DPS, Sniper ",
    },

    {
        "name": "Rosetta",
        "HP": 2113,
        "ATK": 318,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/7/7e/Npc_zoom_3030010000_01.png/480px-Npc_zoom_3030010000_01.png",
        "combatStyle": " DPS ",
    },
    {
        "name": "Siegfried",
        "HP": 6760,
        "ATK": 656,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/a/ab/Npc_zoom_3040025000_01.png/480px-Npc_zoom_3040025000_01.png",
        "combatStyle": " DPS, Special ",
    },
    {
        "name": "Ferry",
        "HP": 6803,
        "ATK": 531,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/8/8c/Npc_zoom_3030032000_01.png/480px-Npc_zoom_3030032000_01.png",
        "combatStyle": " Special ",
    },
    {
        "name": "Ghandagoza",
        "HP": 5878,
        "ATK": 526,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/4/4c/Npc_zoom_3040052000_01.png/480px-Npc_zoom_3040052000_01.png",
        "combatStyle": " Tank ",
    },
    {
        "name": "Cagliostro",
        "HP": 1629,
        "ATK": 1735,
        "Element": "https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png",
        "img": "https://gbf.wiki/images/thumb/f/ff/Npc_zoom_3040009000_01.png/480px-Npc_zoom_3040009000_01.png",
        "combatStyle": " Support ",
    },
];

const productName = ref('');
const foundProducts = ref([]);
const noMore = ref('');

const clearResults = () => {
    foundProducts.value = [];
};

const Eliminar = (index) => {
    foundProducts.value.splice(index, 1);
};

const searchProduct = () => {
    if (foundProducts.value.length >= 4) {
        noMore.value = "Your team limit is 4! choose wisely!";
        return;

    }

    const product = products.find(p => p.name.toLowerCase() === productName.value.toLowerCase());
    if (product) {
        foundProducts.value = [...foundProducts.value, product];
        productName.value = '';
    }
};

</script>


<!--estilos solo para funciones-->
<style scoped>
.product-info {
    display: inline-block;
    margin: auto;

}


h4 {
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 2.3rem;
    margin: 20px 0;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: lighter;
    font-style: normal;

}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 1.5rem;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: lighter;
    font-style: normal;
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid black;

}

.margin-combat {
    display: flex;
    flex-direction: column;

}

.container-teambuilder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}
</style>




