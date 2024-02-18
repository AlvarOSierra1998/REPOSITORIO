<template>
    <div class="carousel">
        <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }">
            <img class="photo" :src="image" alt="Carousel image">
            <div class="button-container">
                <button @click="prev">Previous</button>
                <button @click="next">Next</button>
            </div>

        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const images = [
    new URL('../assets/img/fondo1.jpg', import.meta.url),
    new URL('../assets/img/fondo1.jpg', import.meta.url),
    new URL('../assets/img/fondo1.jpg', import.meta.url),
    // Add more image paths as needed
];

const activeIndex = ref(0);

const next = () => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
};

const prev = () => {
    activeIndex.value = (activeIndex.value - 1 + images.length) % images.length;
};
</script>
  
<style scoped>


.carousel{
    display: inline-flex;
    margin: auto;
    position: relative;
    left: 1%;
}


.photo {
    width: 100%;
    border-radius: 10px ;
    box-shadow: 0 20px 120px 0 rgba(0, 0, 0, 0.5);
}

.carousel-item {
    display: none;
}

.carousel-item.active {
    display: block;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;

}
.button-container button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    cursor: pointer;
    background: none;

}
.button-container button:hover {
    background-color: rgba(0, 0, 0, 0.507);
    color:wheat;
    box-shadow: 2px 30px 40px #000000;
    transition: 0.5s;
}

@media screen and ( max-width: 768px){
    .carrousel{
        display:none
    }
    .photo {
    display:none;
}
.button-container button {
    display:none;
}
}
@media screen and ( max-width: 992px){
    .carrousel{
        display:none
    }
    .photo {
    display:none;
}
.button-container button {
    display:none;
}
}


@media screen and (max-width: 1920px) and (max-height: 1080px){
    .carousel{
        display: inline-flex;
        margin: auto;
        position: relative;
        left: 2%;
    }
    .photo {
        width: 130%;
        border-radius: 10px ;
        box-shadow: 20px 20px 30px 0 rgba(0, 0, 0, 0.5);
    }
    .carousel-item {
        display: none;
    }
    .carousel-item.active {
        display: block;
    }
    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 130%;
    }
    .button-container button {
        margin: 0 10px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #f1f1f1;
        cursor: pointer;
        background: none;
        font-size: 1.5rem;
    }
    .button-container button:hover {
        background-color: rgba(0, 0, 0, 0.507);
        color:wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }
}

</style>