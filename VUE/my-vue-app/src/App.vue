<template>
  <body>
    <main>
      <section class="gradiante">
        <div class="foto">
          <img class="animate__animated animate__fadeIn" src="./assets/img/Gbf_relink_logo.png" alt="Imagen">
        </div>
        <div style="overflow: hidden;">
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"
            style="fill: #ffffff; width: 101%; height: 632px; transform: rotate(180deg);">
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
        <parallax />
      </section>
      <section>
        <characters />
      </section>
    
      <section>
        <teamBuilder />
      </section>

      
    </main>
    <footer>
      <p>© 2024 Granblue Fantasy Relink</p>
      <ul class="no-bullets">

        <li class="tooltip">
          <span class="tooltiptext">OficialWebsite</span>
          <a href="https://relink.granbluefantasy.jp/en/" target="_blank" rel="noopener noreferrer</a>">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/ElEQVR4AbzOA2xgCRRA0d1ybdu2bdse27Zt27Zt27Ztm39Pk99kjLYzNznxwxUJ6DEq8yWXtdvJS3v+4WouW0/Sm30UJ4a4ookg0V15jkVPMIyAnWQgrodIyTUkulj+ITu/8ilv8RujCdhHFq7lJbrwJycWy/XcyR1EcMG9yAAOsJOt7CYIHaAjzVlKQG9+5X2K0YaW1ONjIrionmcxAbsYxlIOEJxgF6vYzs5QwHFKcRcRJKiCHGYFNUnLDg6yh4D+fM5bZGYRxwhYT15iSFB3kJPX+JNJ9OFvvqM1JfiHGOJ6niYcI2ALH5Kg3iEjpVlMUe4kkrhu5gO+4Fri+4l9BBwjMwnqKWazi3Hcy998w4ldQwTxFSEIHSUDF9Rt3Eh819GdnLzOjeTlL87WI8whCO2hC49y3p6mEA8R142U4hGe5Tay8Qtn62u2E4Qq8wfhnvP3PuV5mriu4VfWMZS+fEZ8N/EkN/IPCwlC43mMuJ7jZS6oN6jNR8T1DXsJ2M6rXMsHpOU/0jCLIDSCV7joHuchPmcE2fiOHQTspgS5SU0a/iUti9hAJe4nQT1PKZqGUtCd9eykNyl4iDv4hqpsoh2vEEWiupF3aEpZvudjfqIuZalNVl7jO/rQiQdJkq4jHwupwh9cw/vkYx3HWEd9PqESvXmMRBXBx1SiEL/xOK+TnZt5nQJMJWAR6ShLa24lUUUSwZ2MoA8zqE8s8d1Hefaxi4JUoRiRJLo7WUAQakY0JxZNdvayk9y04dOkemDeOR+QoinNMTawki5ck9QPNCWKM3UL/QlCO/iURHU3iwhCHYjlbH3CVoJQS2K46CL5kBqsZ3doKaV5gTMVTSOC0BY+SugDb/MzX5zgS37hWc7WG2wgCHXjek4tlt94gyQtijoEocPkJ4oTe4nuNOV5krRnmcchprOZcjzFTdxFTdJThGwkeT+ylIoUZyozGcBQ6vAqbfmIS9KX9Kcuf/I7//Ed39CSrERxyXqQ3NTlS96hIU35f4Gwgg0AvPToeVjyYdUAAAAASUVORK5CYII="
              title="Oficial Website" alt="Oficial WebSite">
          </a>
        </li>
        <ul>
          <li class="tooltip">
            <span class="tooltiptext">GitHub</span>
            <a href="https://github.com/AlvarOSierra1998" target="_blank" rel="noopener noreferrer">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUwNTq/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaSrd37mAAABPUlEQVR4AW3TBZKEMBAF0B8GCHzcnbW5/xm30qEyknklcU/DgQpuYRTHUXgLFHw6SemkmcYrlcd8kRYlnlQ1PU0Fp434Qde75Qd+1FUQKiRZjyGfTGNjKhWMmSQXYO3Ibao3MlqBnSRzADhk/ycAdcqclSSHnEUD+KLt8KalMQMqpl3izU5jKxHQGCq8Ud80fq4VfuFZaIyQO4wVPEre5g+RrIAPJrkQSL8OPjv3htQmH8guU5uwgseeP7ITMYBnpdFgvlJPcx0zoLjjzS/FDrVRvH6xsqDYlLx29huRUaFx6YuI1mhKMbddf9trEzca7rmRk/FxpiRXiJO8FDBURyb4yfO7glC8TOpacmAc4ElMEWlc2oGckjwvYVFEB5wjouE6uLBwquypQym/scKrM4njElYaJy182q15aDj/oQMZkS8JH3IAAAAASUVORK5CYII="
                title="GitHub" alt="Github">
            </a>
          </li>
          <ul>
            <li class="tooltip">
              <span class="tooltiptextLinkedin">Linkedin</span>
              <a href="https://twitter.com/GBF_RL_EN" target="_blank" rel="noopener noreferrer">
                <img class="linkedin"
                  src="./assets/img/linkedin.png"
                  title="Linkedin" alt="Linkedin">
              </a>
            </li>
          </ul>
        </ul>

      </ul>
      <div class="marquee">
        <p>© Web Designed By: Alvaro Olmos Sierra</p>
      </div>
    </footer>
  </body>
</template>
      
<script setup>
import characters from './components/characters.vue';
import teamBuilder from './components/teamBuilder.vue';
import parallax from './components/parallax.vue';


</script>
      
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

.linkedin{
  width: 6.7%;
}
.marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.marquee p {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.no-bullets {
  list-style-type: none;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip .tooltiptext  {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  left: 100%;
  /* Position the tooltip to the right of the text */
  top: 50%;
  margin-top: -30px;
  /* Use half of the height to center the tooltip vertically */

  opacity: 0;
  transition: opacity 0.3s;
}

/*COMPROBAR*/
.tooltip:hover .tooltiptext  {
  visibility: visible;
  opacity: 1;
}
.tooltiptextLinkedin{
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  left: 7%;
  padding: 1%;
  /* Position the tooltip to the right of the text */
  top: 50%;
  margin-top: -30px;
  /* Use half of the height to center the tooltip vertically */

  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip:hover .tooltiptextLinkedin  {
  visibility: visible;
  opacity: 1;
}


</style>


