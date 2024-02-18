<template>
    
        <div class="parallax" :style="{ opacity: opacityValue }">
            <div>
                <h1>Granblue Fantasy Relink</h1>
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

            </div>
            <h2>グランブルーファンタジー リリンク</h2>
        </div>
    
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
    padding: 20px;
    text-align: center;
    font-size: 20px;
    color: white;
    margin: auto;
    display: inline-flex;
}

.parallax h1 {
    font-size: 10rem;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-style: bold;
}

.prallax h2 {
    font-size: 5rem;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-style: italic;

}

.parallax p {
    font-size: 2rem;
    border-radius: 10px;
    color: black;
    text-shadow: 2px 2px 4px #000000;
    font-weight: bolder;
    background-color: rgba(255, 255, 255, 0.356);
    padding: 3rem;
    box-shadow: 2px 30px 40px #000000;

}




</style>