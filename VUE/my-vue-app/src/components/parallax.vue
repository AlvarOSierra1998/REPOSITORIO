<template>
    <div class="parallax" :style="{ opacity: opacityValue }">
        <div>
            <img src="https://gbf.wiki/images/7/72/Npc_zoom_3050001000_01.png" alt="Vyrn">
            <carrousel />
            <h1>About</h1>
            <hr>
            <blockquote>

                <p>Granblue Fantasy: Relink is an action RPG developed by Cygames and PlatinumGames. It is based on the
                    Granblue Fantasy universe. The game was announced in August 2016 and is set to be released for the
                    PlayStation 4 and PlayStation 5. The game was originally being developed by Cygames' internal
                    studio,
                    but
                    development was moved to PlatinumGames in 2019. The game is set to be released in 2022.</p>
                <p>
                    The game is set in the Granblue Fantasy universe, a world of floating islands and airships. The game
                    will
                    feature a four-player co-op mode, and players will be able to choose from a variety of characters,
                    each
                    with
                    their own unique abilities and playstyles. </p>
                <p>
                    The game will also feature a story mode, which will allow players
                    to experience the game's story and lore.
                    The game will also feature a variety of different environments,
                </p>
                <p>
                    with their own unique enemies and challenges. The game will also feature a variety of different
                    weapons
                    and
                    equipment, which players will be able to use to customize their characters and playstyles. The game
                    will
                    also
                    feature a variety of different enemies, each with their own unique abilities and attacks. The game
                    will
                    also
                </p>


            </blockquote>
            <div>

            </div>
        </div>

        <h2>グランブルーファンタジー リリンク</h2>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import carrousel from './carrousell.vue';

const opacityValue = ref(0);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    opacityValue.value = window.scrollY / 1000;
}
</script>
<style scoped>
@media screen and (min-width: 2000px) {
    .parallax {
        background-image: url("https://static.actugaming.net/media/2023/08/granblue-fantasy-relink-screenshot-22-08-202301.jpg");
        height: 1300px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-image: fill 0 linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        transition: opacity 1s ease-in-out;

    }

    .parallax div {
        padding: 5rem;
        text-align: center;
        font-size: 20px;
        color: white;
        margin: auto;
        display: inline-flex;

    }

    .parallax img {
        transition: transform 0.5s;
        position: relative;
        animation: slide 5s ease-in-out infinite;
        animation-delay: 2s;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 90%;
        width: 15%;
        height: 20%;

    }

    @keyframes slide {

        0%,
        100% {
            top: 0;
        }

        50% {
            top: 10%;
        }
    }

    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1.7rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(255, 255, 255, 0.507);
        padding: 3rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;




    }

    .parallax h2 {
        display: none;

    }

    .parallax h1 {
        padding: 1rem;
        font-style: italic;
        text-shadow: 2px 23px 4px #000000;
    }

    hr {
        height: 300px
    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }


}

/**MOvil */
@media screen and (max-width:768px) {
    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        width: 10%;
        height: 40px;
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;


    }

}

/*tablet*/
@media screen and (max-width: 992px) {
    .parallax {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 5rem;
        font-size: 0.2rem;


    }

    .parallax p {
        width: 160%;
        height: 236px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        Position: relative;
        left: -47%;

    }

    h2 {
        font-size: 11rem;
        position: relative;
        left: 65%;
    }

    h1 {
        font-size: 2.3rem;
        position: relative;
        top: -10%
    }

    hr {
        display: none
    }



}

/*Pantalla 1080*/
@media screen and (max-width: 1920px) and (max-height: 1080px) {

    .parallax {
        background-image: url("https://static.actugaming.net/media/2023/08/granblue-fantasy-relink-screenshot-22-08-202301.jpg");
        height: 1300px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-image: fill 0 linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        transition: opacity 1s ease-in-out;

    }

    .parallax div {
        padding: 1rem;
        text-align: center;
        font-size: 20px;
        color: white;
        margin: auto;
        display: inline-flex;
    }

    .parallax img {
        transition: transform 0.5s;
        position: relative;
        animation: slide 5s ease-in-out infinite;
        animation-delay: 2s;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 90%;
        width: 15%;
        height: 20%;

    }

    @keyframes slide {

        0%,
        100% {
            top: 0;
        }

        50% {
            top: 10%;
        }
    }

    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1.7rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(255, 255, 255, 0.507);
        padding: 2rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;


    }

    .parallax h2 {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-shadow: 2px 2px 4px #000000;
        font-style: italic;
        position: relative;
        top: 30%;
        left: -76%;
        width: 80%;

    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        padding: 3rem;
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }


}

@media screen and (min-width: 2082px) {
    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1.4rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(255, 255, 255, 0.507);
        padding: 2rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;
        height: 200px;

    }

    .parallax h2 {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-shadow: 2px 2px 4px #000000;
        font-style: italic;
        position: relative;
        top: 30%;
        left: -76%;
        width: 80%;

    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        padding: 3rem;
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }
}

@media screen and (max-width: 2078px) {
    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1.4rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(255, 255, 255, 0.507);
        padding: 2rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;
        height: 200px;

    }

    .parallax h2 {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-shadow: 2px 2px 4px #000000;
        font-style: italic;
        position: relative;
        top: 30%;
        left: -76%;
        width: 80%;

    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        padding: 3rem;
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }
}


@media screen and (max-width: 1978px) {

    .parallax {
        background-image: url("https://static.actugaming.net/media/2023/08/granblue-fantasy-relink-screenshot-22-08-202301.jpg");
        height: 1300px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-image: fill 0 linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        transition: opacity 1s ease-in-out;

    }

    .parallax div {
        padding: 1rem;
        text-align: center;
        font-size: 20px;
        color: white;
        margin: auto;
        display: inline-flex;
    }

    .parallax img {
        transition: transform 0.5s;
        position: relative;
        animation: slide 5s ease-in-out infinite;
        animation-delay: 2s;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 90%;
        width: 15%;
        height: 20%;

    }

    @keyframes slide {

        0%,
        100% {
            top: 0;
        }

        50% {
            top: 10%;
        }
    }

    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1.4rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(206, 179, 179, 0.507);
        padding: 2rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;
        height: 200px;

    }

    .parallax h2 {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-shadow: 2px 2px 4px #000000;
        font-style: italic;
        position: relative;
        top: 30%;
        left: -76%;
        width: 80%;

    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        padding: 3rem;
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }
}


@media screen and (max-width: 1186px) {

    .parallax {
        background-image: url("https://static.actugaming.net/media/2023/08/granblue-fantasy-relink-screenshot-22-08-202301.jpg");
        height: 1300px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-image: fill 0 linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        transition: opacity 1s ease-in-out;

    }

    .parallax div {
        padding: 1rem;
        text-align: center;
        font-size: 20px;
        color: white;
        margin: auto;
        display: inline-flex;
    }

    .parallax img {
        transition: transform 0.5s;
        position: relative;
        animation: slide 5s ease-in-out infinite;
        animation-delay: 2s;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 90%;
        width: 15%;
        height: 20%;

    }

    @keyframes slide {

        0%,
        100% {
            top: 0;
        }

        50% {
            top: 10%;
        }
    }

    .parallax {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax p {
        font-size: 1rem;
        border-radius: 10px;
        color: black;
        text-shadow: 2px 2px 4px #000000;
        font-weight: bolder;
        background-color: rgba(206, 179, 179, 0.507);
        padding: 2rem;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s ease-in-out;
        height: 220px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30%;

    }

    .parallax h2 {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-shadow: 2px 2px 4px #000000;
        font-style: italic;
        position: relative;
        top: 30%;
        left: -76%;
        width: 80%;

    }


    .parallax p:hover {
        background-color: rgba(0, 0, 0, 0.507);
        padding: 3rem;
        color: wheat;
        box-shadow: 2px 30px 40px #000000;
        transition: 0.5s;
    }
}
</style>