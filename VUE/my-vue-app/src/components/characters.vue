
<template>
    <!--MAIN-->
    <section>
        <!--lista perosnajes-->
        <h1>Characters</h1>
        <div>
            <div id="top" class="botones sticky">
                <a href="#vaseraga">
                    <button @click="mostrarVaseraga" :class="{ vaseragaB: mostrarVaseraga }">
                        <h2>Vaseraga</h2>
                    </button>
                </a>
                <a href="#vane">
                    <button @click="mostrarVane" :class="{ vaneB: mostrarVane }">
                        <h2>Vane</h2>
                    </button>
                </a>
                <a href="#katalina">
                    <button @click="mostrarKatalina" :class="{ KatalinaB: mostrarKatalina }">
                        <h2>Katalina</h2>
                    </button>
                </a>
                <a href="#percival">
                    <button @click="mostrarPercival" :class="{ PercivalB: mostrarPercival }">
                        <h2>Percival</h2>
                    </button>
                </a>
                <a href="#io">
                    <button @click="mostrarIo" :class="{ IoB: mostrarIo }">
                        <h2>Io</h2>
                    </button>
                </a>
                <a href="#yodarha">
                    <button @click="mostrarYodarha" :class="{ YodarhaB: mostrarYodarha }">
                        <h2>Yodarha</h2>
                    </button>
                </a>
                <a href="#rackam">
                    <button @click="mostrarRackam" :class="{ RackamB: mostrarRackam }">
                        <h2>Rackam</h2>
                    </button>
                </a>
                <a href="#eugen">
                    <button @click="mostrarEugen" :class="{ EugenB: mostrarEugen }">
                        <h2>Eugen</h2>
                    </button>
                </a>
                <a href="#rosetta">
                    <button @click="mostrarRosetta" :class="{ RosettaB: mostrarRosetta }">
                        <h2>Rosetta</h2>
                    </button>
                </a>

                <a href="#lancelot">
                    <button @click="mostrarLancelot" :class="{ LancelotB: mostrarLancelot }">
                        <h2>Lancelot</h2>
                    </button>
                </a>
                <a href="#siegfried">
                    <button @click="mostrarSiegfried" :class="{ SiegfriedB: mostrarSiegfried }">
                        <h2>Siegfried</h2>
                    </button>
                </a>
                <a href="#charlotta">
                    <button @click="mostrarCharlotta" :class="{ CharlottaB: mostrarCharlotta }">
                        <h2>Charlotta</h2>
                    </button>
                </a>
                <a href="#narmaya">
                    <button @click="mostrarNarmaya" :class="{ NarmayaB: mostrarNarmaya }">
                        <h2>Narmaya</h2>
                    </button>
                </a>
                <a href="#zeta">
                    <button @click="mostrarZeta" :class="{ ZetaB: mostrarZeta }">
                        <h2>Zeta</h2>
                    </button>
                </a>
                <a href="#ferry">
                    <button @click="mostrarFerry" :class="{ FerryB: mostrarFerry }">
                        <h2>Ferry</h2>
                    </button>
                </a>
                <a href="#Ghandagoza">
                    <button @click="mostrarGhandagoza" :class="{ GhandagozaB: mostrarGhandagoza }">
                        <h2>Ghandagoza</h2>
                    </button>
                </a>
                <a href="#Cagliostro">
                    <button @click="mostrarCagliostro" :class="{ CagliostroB: mostrarCagliostro }">
                        <h2>Cagliostro</h2>
                    </button>
                </a>

            </div>
            <div v-if="mostrarInfo" :class="{ vaseragaInfo: mostrarInfo }">
                <img class="imgvas" src="../assets/img/vaseraga.png" alt="Vaseraga">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="vaseraga">Vaseraga</h2>
                    <q>
                        <i>
                            This towering Draph warrior belongs to the Society, an organization which hunts primal
                            beasts. He has
                            formed a contract with the seal weapon known as Great Scythe Grynoth.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsV">Stats</button>
                    <ul class="stats-fondo-vaseraga" v-if="estadisticasInfo">
                        <li>HP(lvl 100): <b class="values-vaseraga">58978</b></li>
                        <li>ATK (lvl 100): <b class="values-vaseraga"> 60000 </b> </li>
                        <li>Element <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="element void"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="weaponV">Weapon</button>
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
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>


        </div>
    </section>

    <!---VANE---->
    <section>
        <!--lista perosnajes-->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoV" :class="{ VaneInfo: mostrarInfoV }">
                <img class="imgvas" src="../assets/img/Vane.png" alt="Vane">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="vane">Vane</h2>
                    <q>
                        <i>
                            Knight of Fellowship
                            A knight of valor, he pours his heart and soul into protecting his homeland, his friends,
                            and his comrades-in-arms.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsVane">Stats</button>
                    <ul class="stats-fondo-vane" v-if="estadisticasInfoVan">
                        <li>HP(lvl 100 ): <b class="values-vane"> 76543 </b> </li>
                        <li>ATK(lvl 100 ): <b class="values-vane"> 40000 </b></li>
                        <li>Element
                            <img src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="element vane">
                        </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="alabardaOn">Weapon</button>
                    <!---ALABARDA-->
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
                                    <td class="text-left">29</td>
                                    <td class="text-left">181</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">280</td>
                                    <td class="text-left">1630</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>

    <!---KATALINA---->
    <section>
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoKatalina" :class="{ KataInfo: mostrarInfoKatalina }">
                <img class="imgvas" src="../assets/img/Katalina.png" alt="Katalina">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="katalina">KATALINA</h2>
                    <q>
                        <i>

                            Skybound Protector
                            Katalina once swore an oath of knighthood to the Erste Empire, but those days are long
                            behind her. Her knightly duty continues, though now in the service of protecting Lyria.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsKatalina">Stats</button>
                    <ul class="stats-fondo-katalina" v-if="estadisticasInfoKatalina">
                        <li>HP(100): <b class="values-katalina"> 24000 </b></li>
                        <li>ATK(100): <b class="values-katalina"> 40000 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="water-element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="estoqueOn">Weapon</button>
                    <!---RUKALSA-->
                    <div v-if="estoque">
                        <div class="table-title">
                            <h2><i>Rukalsa.</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        This sword was given to a young girl on the day she vowed to become a chivalrous
                                        knight. Since then, it has watched as months turned to years and a girl frew into a
                                        guardian. now it rests at her hip, ready to be drawn in defense of her friends and
                                        allies.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/rukalsa.png" alt="Estoque Rukalsa">
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
                                    <td class="text-left">29</td>
                                    <td class="text-left">181</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">280</td>
                                    <td class="text-left">1630</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>

    <!---PERCIVAL---->
    <section>
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoPercival" :class="{ PercivalInfo: mostrarInfoPercival }">
                <img class="imgvas" src="../assets/img/Percival.png" alt="Percival">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="percival">PERCIVAL</h2>
                    <q>
                        <i>
                            Lord of Flames
                            Possessing the makings of a king, this young man strives to create a kingdom free of war with
                            other like-minded individuals.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsPercival">Stats</button>
                    <ul class="stats-fondo-percival" v-if="estadisticasInfoPercival">
                        <li>HP(lvl 100): <b class="values-percival"> 30000 </b></li>
                        <li>ATK(lvl 100): <b class="values-percival"> 70000 </b> </li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="percoval_Percival"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="espadaOn">Weapon</button>
                    <!---Espada-->
                    <div v-if="espadaPercival">
                        <div class="table-title">
                            <h2><i>Flamberge.</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        A prosperous kingdom devoid of war, tyranny, and betrayal - such a world does this
                                        young man envision. His sword slickering like a flame in the wind, our hero
                                        advances, ever closer to the world of his dreams.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/percivalWeapon.png" alt="Weapon_percival">
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left">Stats</th>
                                    <th class="text-left">Level 50</th>
                                    <th class="text-left">Level 100</th>
                                </tr>
                            </thead>
                            <tbody class="table-hover">
                                <tr>
                                    <td class="text-left">HP</td>
                                    <td class="text-left">575</td>
                                    <td class="text-left">600</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">68</td>
                                    <td class="text-left">1920</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>
    <!---IO---->
    <section>
        <!--lista perosnajes-->
        <div>
            <div v-if="mostrarInfoIo" :class="{ IoInfo: mostrarInfoIo }">
                <img class="imgvas" src="../assets/img/Io.png" alt="Io">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="io">Io</h2>
                    <q>
                        <i>
                            Skybound Dreamer
                            Don't let her small size fool you. This young mage is eager to showcase her impressive talent.
                            She vows to bring smiles to the world
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsIo">Stats</button>
                    <ul class="stats-fondo-io" v-if="estadisticasInfoIo">
                        <li>HP(lvl 100): <b class="values-io"> 20000 </b> </li>
                        <li>ATK(lvl 100): <b class="values-io"> 50000 </b> </li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="light_element"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="BastonOn">Weapon</button>
                    <!---Baston-->
                    <div v-if="BastonIo">
                        <div class="table-title">
                            <h2><i>Little Witch Scepter.</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        A little mage carried this staff as she pursued a hidden truth across the scorched
                                        earth. So long as it was by her side, she even brought an iron colossus to its
                                        knees, proof that she commanded magic which far outsripped her peers
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/ioWeapon.png" alt="Weapon_io">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>

    <!---YODARHA---->
    <section>
        <!--lista perosnajes-->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoYodarha" :class="{ YodarhaInfo: mostrarInfoYodarha }">
                <img class="imgvas" src="../assets/img/Yodarha.png" alt="Yodarha">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="yodarha">Yodarha</h2>
                    <q>
                        <i>
                            Illusory Fencer

                            This man was once a world-renowned swordsman, but these days he spends much of his time fishing
                            in seclusion.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsYodarha">Stats</button>
                    <ul class="stats-fondo-yodarha" v-if="estadisticasInfoYodarha">
                        <li>HP(lvl 100): <b class="values-yodarha"> 35000 </b> </li>
                        <li>ATK(lvl 100): <b class="values-yodarha"> 80000 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/wind-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="wind_element">
                        </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="katanaYodarha">Weapon</button>
                    <!---Katana-->
                    <div v-if="Katana">
                        <div class="table-title">
                            <h2><i>Kiku-Ichimonji</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        The codger planned to spend his final years fishing, but all he sees now are
                                        promising youths, lost and flundering. He lays down his rod for the sword and sails
                                        to their aid. His future may be short, but society grows when the old plant trees
                                        under whose shade they will never sit.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/Katana.png" alt="Weapon_io">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>

    <!---RACKAM---->
    <section>
        <!--lista perosnajes-->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoRackam" :class="{ RackamInfo: mostrarInfoRackam }">
                <img class="imgvas" src="../assets/img/Rackam.png" alt="Rackam">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="rackam">Rackam</h2>
                    <q>
                        <i>
                            Skyfarer
                            A former soldier who now travels the skies as a skyfarer. He's a bit of a worrywart, but he
                            always has his friends' backs.

                            Skybound Navigator
                            Helmsman of the airship Grandcypher, he can be as untamed as the open skies.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsRackam">Stats</button>
                    <ul class="stats-fondo-rackam" v-if="estadisticasInfoRackam">
                        <li>HP(lvl 100): <b class="values-rackam"> 65000 </b></li>
                        <li>ATK(lvl 100): <b class="values-rackam"> 45000 </b> </li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="Rackam_element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="pistolaRackam">Weapon</button>
                    <!---Pistola-->
                    <div v-if="pistola">
                        <div class="table-title">
                            <h2><i>Flintspike</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        A skyfarer's best friend. This Flintspike has seen its share of battles, but it's
                                        always been there for its owner. It's a symbol of the bond between
                                        skyfarer and skyfarer.
                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/rackamweapon.png" alt="Weapon_Rackam">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---EUGEN---->

    <section>
        <!--lista perosnajes-->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoEugen" :class="{ RackamInfo: mostrarInfoEugen }">
                <img class="imgvas" src="../assets/img/eugen.png" alt="Eugen">
                <blockquote class="txtVa">
                    <p>
                    <h2 id="eugen">Eugen</h2>
                    <q>
                        <i>
                            Skybound Soldier
                            A veteran skyfarer whose combat prowess is rivaled only by his regret.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsEugen">Stats</button>
                    <ul class="stats-fondo-eugen" v-if="estadisticasInfoRackam">
                        <li>HP(lvl 100 ): <b class="values-eugen">77542</b></li>
                        <li>ATK (lvl 100) : <b class="values-eugen"> 79062 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="eugen_element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="pistolaEugen">Weapon</button>
                    <!---Pistola-->
                    <div v-if="pistola">
                        <div class="table-title">
                            <h2><i>Dreyse</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        The rifle of an old veteran who drowned his regret in the sea. Across the years the
                                        weight of self-loathing wore him down, until he eventually became unable to act.
                                        That is until a fateful encounter turned his loathing to resolve, and he took up
                                        arms against the great evil consuming his homeland.

                                    </td>
                                    <td>
                                        <img class="weapon" src="../assets/img/rackamweapon.png" alt="Weapon_Rackam">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---ROSETTA---->
    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoRosetta" :class="{ RosettaInfo: mostrarInfoRosetta }">
                <img class="imgvas" src="../assets/img/Rosetta.png" alt="Rosetta">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="rosetta">Rosetta</h2>
                    <q>
                        <i>

                            Skybound Watcher

                            A bystander whose roots are firmly planted in both the past and present.


                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsRosetta">Stats</button>
                    <ul class="stats-fondo-rosetta" v-if="estadisticasInfoRosetta">
                        <li>HP(100): <b class="values-rosetta"> 30000 </b></li>
                        <li>ATK( 100 ): <b class="values-rosetta"> 55555 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="element_void"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="dagaRosetta">Weapon</button>
                    <!---daga-->


                    <div v-if="daga">
                        <div class="table-title">
                            <h2><i>Egoism</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        Deep within a forgotten forest, a beautiful maiden's dagger lies in wait for the
                                        return of its wielder. Its fate was sealed when a crew of young skyfarers invited
                                        the maiden to relive her glory days in the sky. Though a long-held secret separates
                                        her from the crew, she's grateful to adventure once more.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/rosettaWeapon.png" alt="Weapon_Rosetta">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!--LANCELOT-->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoLancelot" :class="{ LancelotInfo: mostrarInfoLancelot }">
                <img class="imgvas" src="../assets/img/lancelot.png" alt="lancelot">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="lancelot">Lancelot</h2>
                    <q>
                        <i>
                            Twinfang Prodigy
                            Captain of the knightly Order of the White Dragons. Despite his youth, he is more than capable
                            of leading the forces of an entire kingdom.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsLancelot">Stats</button>
                    <ul class="stats-fondo-lancelot" v-if="estadisticasInfoLancelot">
                        <li>HP(lvl 100 ): <b class="values-lancelot"> 22333 </b></li>
                        <li>ATK(lvl 100): <b class="values-lancelot"> 64231 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/water-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="Lancelot_element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="espadaOnLancelot">Weapon</button>
                    <!---daga-->
                    <div v-if="espadaLancelot">
                        <div class="table-title">
                            <h2><i>Altachiara</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        Twin blades forged by an aloof blacksmith who retired to the forests of Fendrache.
                                        Spurred by the fervent wish of an aspiring young man, he spent seven days and seven
                                        nights pounding away on the glowing metal by his furnace. One blade is imbued with
                                        the awe of a dragon; the other, the valor of a knight.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/lancelotWeapon.png" alt="Weapon_Lancelot">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---SIEGFRIED---->



    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoSiegfried" :class="{ SiegfriedInfo: mostrarInfoSiegfried }">
                <img class="imgvas" src="../assets/img/siegfried.png" alt="Siegfried">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="siegfried">Siegfried</h2>
                    <q>
                        <i>

                            Dragonslayer
                            Once reviled as a traitor, that didn't stop this loyal knight from heroically saving his kingdom
                            from crisis.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsSiegfried">Stats</button>
                    <ul class="stats-fondo-siegfried" v-if="estadisticasInfoSiegfried">
                        <li>HP(lvl 100 ): <b class="values-siegfried"> 65789 </b></li>
                        <li>ATK(lvl 100): <b class="values-siegfried"> 67682 </b></li>
                        <li>Element <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="Siegfried_element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="espadaOnSiegfried">Weapon</button>
                    <!---daga-->
                    <div v-if="espadaSiegfried">
                        <div class="table-title">
                            <h2><i>Integrity</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        mbroiled in bitter conspiracy more times than our hero can count, he no longer finds
                                        meaning in both honor and dishonor alike. What remains is an enduring vow of eternal
                                        loyalty to his country and his former king. Donning his black armor, sword in hand,
                                        he mounrs over a bygone era.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/siegfriedWeapon.png" alt="Weapon_Siegfried">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>
        </div>
    </section>

    <!---Charlotta---->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoCharlotta" :class="{ CharlottaInfo: mostrarInfoCharlotta }">
                <img class="imgvas" src="../assets/img/charlotta.png" alt="Charlotta">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="charlotta">Charlotta</h2>
                    <q>
                        <i>
                            Tiny Justice

                            The captain of an order of holy knights, all of whom have sworn a sacred pledge. Her sword, a
                            weapon that cleaves evil in twain, is equal to her in both size and power.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsCharlotta">Stats</button>
                    <ul class="stats-fondo-charlotta" v-if="estadisticasInfoCharlotta">
                        <li>HP(lvl 100 ): <b class="values-charlotta">77777</b></li>
                        <li>ATK(lvl 100 ): <b class="values-charlotta"> 62345 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="charlotta_element"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="espadaOnCharlotta">Weapon</button>
                    <!---daga-->
                    <div v-if="espadaCharlotta">
                        <div class="table-title">
                            <h2><i>Claiomh Solais</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        The blade of this divine saber was forged using a rare translucent crystal that
                                        glistens with respondent shades of aquamarine. Such a sublime creation premits only
                                        the most holy and fully realized knights to wield its power in order to assure
                                        indomitable valor and the greatest of glory
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/charlottaWeapon.png" alt="Weapon_Charlotta">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---NARMAYA---->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoNarmaya" :class="{ NarmayaInfo: mostrarInfoNarmaya }">
                <img class="imgvas" src="../assets/img/narmaya.png" alt="Narmaya">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="narmaya">Narmaya</h2>
                    <q>
                        <i>

                            Ephemeral Blade

                            Born to a clan renowned for their mastery of all forms of martial arts, this swordswoman trains
                            every day in order to reach even greater heights.


                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsNarmaya">Stats</button>
                    <ul class="stats-fondo-Narmaya" v-if="estadisticasInfoNarmaya">
                        <li>HP(lvl 100): <b class="values-Narmaya">55341</b></li>
                        <li>ATK(lvl 100 ):<b class="values-Narmaya"> 88888 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/dark-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="elemtn_narmaya"> </li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-weapon" @click="katanaOn">Weapon</button>
                    <!---daga-->
                    <div v-if="katanaNarmaya">
                        <div class="table-title">
                            <h2><i>Wicked Nighthide</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        The blade of this divine saber was forged using a rare translucent crystal that
                                        glistens with respondent shades of aquamarine. Such a sublime creation premits only
                                        the most holy and fully realized knights to wield its power in order to assure
                                        indomitable valor and the greatest of glory
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/narmayaWeapon.png" alt="Weapon_Narmaya">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---ZETA-->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoZeta" :class="{ ZetaInfo: mostrarInfoZeta }">
                <img class="imgvas" src="../assets/img/zeta.png" alt="Zeta">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="zeta">Zeta</h2>
                    <q>
                        <i>



                            Crimson Spear

                            This fearless fighter belongs to the Society, an organization which hunts primal beasts. She has
                            formed a contract with the seal weapon known as the Spear of Arvess.



                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsZeta">Stats</button>
                    <ul class="stats-fondo-zeta" v-if="estadisticasInfoZeta">
                        <li>HP(lvl 100 ): <b class="values-zeta"> 63412 </b></li>
                        <li>ATK(lvl 100 ): <b class="values-zeta"> 82819 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="Zeta_element"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="espadaOnZeta">Weapon</button>
                    <!---daga-->


                    <div v-if="espadaZeta">
                        <div class="table-title">
                            <h2><i>Spear of Arvess</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        Restricted file - code name: Arvess. A cross-tipped spear of lunar origin. This seal
                                        weapon harnesses the power of slames. While Arvess augments its contractor's
                                        agility, it has a tendency to over-amplify the wielder's natural arrogance. Great
                                        care must be taken in choosing Arvess's contractor.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/zetaWeapon.png" alt="Weapon_Zeta">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---FERRY---->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoFerry" :class="{ FerryInfo: mostrarInfoFerry }">
                <img class="imgvas" src="../assets/img/ferry.png" alt="Ferry">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="ferry">Ferry</h2>
                    <q>
                        <i>

                            Spirit Maiden

                            An Erune girl who resides on an island shrouded in mist. Having already died, she now traverses
                            this world as a ghost.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsFerry">Stats</button>
                    <ul class="stats-fondo-ferry" v-if="estadisticasInfoFerry">
                        <li>HP( lvl 100 ): <b class="values-ferry"> 54678 </b></li>
                        <li>ATK(lvl 100 ): <b class="values-ferry"> 60000 </b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/light-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="ferry_element"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="LatigoOnFerry">Weapon</button>
                    <!---Látigo-->
                    <div v-if="LatigoFerry">
                        <div class="table-title">
                            <h2><i>Geisterpeitsche</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        This revenant whip in hand, a young woman prays for an everlasting connection with
                                        those she crosses paths with. It pays heed to the screams of lost souls and herds
                                        them to a more peaceful place
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/ferryWeapon.png" alt="Weapon_Ferry">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---GHANDAGOZA---->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoGhandagoza" :class="{ GhandagozaInfo: mostrarInfoGhandagoza }">
                <img class="imgvas" src="../assets/img/ghandagoza.png" alt="Ghandagoza">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="Ghandagoza">Ghandagoza</h2>
                    <q>
                        <i>
                            Eternal Rage Grandmaster

                            Founder of the Eternal Rage style. He has accomplished many legendary feats with his furious
                            fists.
                            A warrior who has dedicated his life to the art of combat. He has honed his body to
                            perfection, and his fists are as hard as iron. He has no need for weapons, for his
                            body is his weapon.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsGhandagoza">Stats</button>
                    <ul class="stats-fondo-ghandagoza" v-if="estadisticasInfoGhandagoza">
                        <li>HP(lvl 100): <b class="values-ghandagoza"> 80000</b></li>
                        <li>ATK(lvl 100): <b class="values-ghandagoza"> 57893</b></li>
                        <li>Element <img src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/fire-element-icon-granblue-fantasy-relink-wiki-guide.png" alt="Ghandagoza_element"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="weaponOnGhandagoza">Weapon</button>
                    <!---Puños-->
                    <div v-if="weaponGhandagoza">
                        <div class="table-title">
                            <h2><i>Brahma Gauntlet</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        This gauntlet blossoms like a lotus flower with the collective heat of the passion
                                        that burns within all living creatures. Its blazing petals dance through the heavens
                                        and devour the old world to make way for the new.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/ghandagozaWeapon.png"
                                            alt="Weapon_Ghandagoza">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---CAGLIOSTRO---->

    <section>
        <!--lista perosnajes-->

        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoCagliostro" :class="{ CagliostroInfo: mostrarInfoCagliostro }">
                <img class="imgvas" src="../assets/img/cagliostro.png" alt="Cagliostro">

                <blockquote class="txtVa">
                    <p>
                    <h2 id="Cagliostro">Cagliostro</h2>
                    <q>
                        <i>
                            Eternal Alchemist

                            A genius alchemist who has lived for over 1000 years. She has mastered the art of
                            transmutation, and her knowledge of the world is vast and deep.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button class="button-stats" @click="statsCagliostro">Stats</button>
                    <ul class="stats-fondo-cagliostro" v-if="estadisticasInfoCagliostro">
                        <li>HP(lvl 100) : <b class="values-cagliostro"> 10000</b></li>
                        <li>ATK(lvl 100):<b class="values-cagliostro"> 50493</b></li>
                        <li>Element: <img
                                src="https://granbluefantasyrelink.wiki.fextralife.com/file/Granblue-Fantasy-Relink/earth-element-icon-granblue-fantasy-relink-wiki-guide.png"
                                alt="Cagliostro_element"></li>
                    </ul>
                    <!---WEAPON-->
                    <button class="button-stats" @click="weaponOnCagliostro">Weapon</button>
                    <!---Libro-->
                    <div v-if="weaponCagliostro">
                        <div class="table-title">
                            <h2><i>Philosopher's Stone</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        A stone that can turn base metals into gold and grant eternal life. It is said that
                                        the Philosopher's Stone is the ultimate goal of alchemy. Cagliostro has been
                                        searching for it for over 1000 years.
                                    </td>
                                    <!---AÑADIR FOTO-->
                                    <td>
                                        <img class="weapon" src="../assets/img/cagliostroWeapon.png"
                                            alt="Weapon_Cagliostro">
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
                                    <td class="text-left">23</td>
                                    <td class="text-left">100</td>
                                </tr>
                                <tr>
                                    <td class="text-left">ATK</td>
                                    <td class="text-left">9</td>
                                    <td class="text-left">1000</td>
                                </tr>
                                <tr>
                                    <td class="text-left">C.A<sup>x</sup></td>
                                    <td class="text-left">??</td>
                                    <td class="text-left">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#top">
                        <p>
                            <b>To the top!</b>
                        </p>
                    </a>
                    <em><small>click up there to go to the buttons section!</small></em>
                </blockquote>
            </div>

        </div>
    </section>

    <!---<section>
        <div ref="parallax" class="botones parallax"></div>
    </section>-->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';



/***  PARALLAX   */

const scrollPosition = ref(0);
const windowHeight = ref(0);

const handleScroll = () => {
    scrollPosition.value = window.scrollY;
};

onMounted(() => {
    windowHeight.value = window.innerHeight;
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

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
/////////////////////////////////////////////////

//info katalina

const estadisticasInfoKatalina = ref(false);
const statsKatalina = () => {
    estadisticasInfoKatalina.value = !estadisticasInfoKatalina.value
};
const mostrarInfoKatalina = ref(false);
const mostrarKatalina = () => {
    mostrarInfoKatalina.value = !mostrarInfoKatalina.value;
};

//weaponKatalina
const estoque = ref(false);
const estoqueOn = () => {
    estoque.value = !estoque.value;
};

/////////////////////////////////////////////////////////

//info Percival 
const estadisticasInfoPercival = ref(false);
const statsPercival = () => {
    estadisticasInfoPercival.value = !estadisticasInfoPercival.value
};
const mostrarInfoPercival = ref(false);
const mostrarPercival = () => {
    mostrarInfoPercival.value = !mostrarInfoPercival.value;
};

//weaponPercival
const espadaPercival = ref(false);
const espadaOn = () => {
    espadaPercival.value = !espadaPercival.value;
};

///////////////////////////////////////////////////

//info Io
const estadisticasInfoIo = ref(false);
const statsIo = () => {
    estadisticasInfoIo.value = !estadisticasInfoIo.value
};
const mostrarInfoIo = ref(false);
const mostrarIo = () => {
    mostrarInfoIo.value = !mostrarInfoIo.value;
};

//weaponIo
const BastonIo = ref(false);
const BastonOn = () => {
    BastonIo.value = !BastonIo.value;
};
///////////////////////////////////////////////////

//info Yodarha
const estadisticasInfoYodarha = ref(false);
const statsYodarha = () => {
    estadisticasInfoYodarha.value = !estadisticasInfoYodarha.value
};
const mostrarInfoYodarha = ref(false);
const mostrarYodarha = () => {
    mostrarInfoYodarha.value = !mostrarInfoYodarha.value;
};

//weaponYodarha
const Katana = ref(false);
const katanaYodarha = () => {
    Katana.value = !Katana.value;
};

///////////////////////////////////////////////////

//info Rackam
const estadisticasInfoRackam = ref(false);
const statsRackam = () => {
    estadisticasInfoRackam.value = !estadisticasInfoRackam.value
};
const mostrarInfoRackam = ref(false);
const mostrarRackam = () => {
    mostrarInfoRackam.value = !mostrarInfoRackam.value;
};

//weaponRackam
const pistola = ref(false);
const pistolaRackam = () => {
    pistola.value = !pistola.value;
};

///////////////////////////////////////////////////

//infoEugen
const estadisticasInfoEugen = ref(false);
const statsEugen = () => {
    estadisticasInfoEugen.value = !estadisticasInfoEugen.value
};
const mostrarInfoEugen = ref(false);
const mostrarEugen = () => {
    mostrarInfoEugen.value = !mostrarInfoEugen.value;
};

//weaponRackam
const pistolaE = ref(false);
const pistolaEugen = () => {
    pistolaE.value = !pistolaE.value;
};

///////////////////////////////////////////////////

//infoRosetta
const estadisticasInfoRosetta = ref(false);
const statsRosetta = () => {
    estadisticasInfoRosetta.value = !estadisticasInfoRosetta.value
};
const mostrarInfoRosetta = ref(false);
const mostrarRosetta = () => {
    mostrarInfoRosetta.value = !mostrarInfoRosetta.value;
};

//weaponROSETTA
const daga = ref(false);
const dagaRosetta = () => {
    daga.value = !daga.value;
};

///////////////////////////////////////////////////

//infoLancelot
const estadisticasInfoLancelot = ref(false);
const statsLancelot = () => {
    estadisticasInfoLancelot.value = !estadisticasInfoLancelot.value
};
const mostrarInfoLancelot = ref(false);
const mostrarLancelot = () => {
    mostrarInfoLancelot.value = !mostrarInfoLancelot.value;
};

//weaponLancelot
const espadaLancelot = ref(false);
const espadaOnLancelot = () => {
    espadaLancelot.value = !espadaLancelot.value;
};

///////////////////////////////////////////////////

//Siegfried
const estadisticasInfoSiegfried = ref(false);
const statsSiegfried = () => {
    estadisticasInfoSiegfried.value = !estadisticasInfoSiegfried.value
};
const mostrarInfoSiegfried = ref(false);
const mostrarSiegfried = () => {
    mostrarInfoSiegfried.value = !mostrarInfoSiegfried.value;
};

//weaponSiegfried
const espadaSiegfried = ref(false);
const espadaOnSiegfried = () => {
    espadaSiegfried.value = !espadaSiegfried.value;
};

///////////////////////////////////////////////////

//Charlotta
const estadisticasInfoCharlotta = ref(false);
const statsCharlotta = () => {
    estadisticasInfoCharlotta.value = !estadisticasInfoCharlotta.value
};
const mostrarInfoCharlotta = ref(false);
const mostrarCharlotta = () => {
    mostrarInfoCharlotta.value = !mostrarInfoCharlotta.value;
};

//weaponCharlotta
const espadaCharlotta = ref(false);
const espadaOnCharlotta = () => {
    espadaCharlotta.value = !espadaCharlotta.value;
};

///////////////////////////////////////////////////

//NARMAYA

const estadisticasInfoNarmaya = ref(false);
const statsNarmaya = () => {
    estadisticasInfoNarmaya.value = !estadisticasInfoNarmaya.value
};
const mostrarInfoNarmaya = ref(false);
const mostrarNarmaya = () => {
    mostrarInfoNarmaya.value = !mostrarInfoNarmaya.value;
};

//weaponNarmaya
const katanaNarmaya = ref(false);
const katanaOn = () => {
    katanaNarmaya.value = !katanaNarmaya.value;
};

///////////////////////////////////////////////////

//ZETA

const estadisticasInfoZeta = ref(false);
const statsZeta = () => {
    estadisticasInfoZeta.value = !estadisticasInfoZeta.value
};
const mostrarInfoZeta = ref(false);
const mostrarZeta = () => {
    mostrarInfoZeta.value = !mostrarInfoZeta.value;
};

//weaponZeta
const espadaZeta = ref(false);
const espadaOnZeta = () => {
    espadaZeta.value = !espadaZeta.value;
};

///////////////////////////////////////////////////

//FERRY

const estadisticasInfoFerry = ref(false);

const statsFerry = () => {
    estadisticasInfoFerry.value = !estadisticasInfoFerry.value
};

const mostrarInfoFerry = ref(false);

const mostrarFerry = () => {
    mostrarInfoFerry.value = !mostrarInfoFerry.value;
};

//weaponFerry

const LatigoFerry = ref(false);

const LatigoOnFerry = () => {
    LatigoFerry.value = !LatigoFerry.value;
};

///////////////////////////////////////////////////

//Ghandagoza

const estadisticasInfoGhandagoza = ref(false);

const statsGhandagoza = () => {
    estadisticasInfoGhandagoza.value = !estadisticasInfoGhandagoza.value
};

const mostrarInfoGhandagoza = ref(false);

const mostrarGhandagoza = () => {
    mostrarInfoGhandagoza.value = !mostrarInfoGhandagoza.value;
};

//weaponGhandagoza

const weaponGhandagoza = ref(false);

const weaponOnGhandagoza = () => {
    weaponGhandagoza.value = !weaponGhandagoza.value;
};

///////////////////////////////////////////////////

//CAGLIOSTRO

const estadisticasInfoCagliostro = ref(false);

const statsCagliostro = () => {
    estadisticasInfoCagliostro.value = !estadisticasInfoCagliostro.value
};

const mostrarInfoCagliostro = ref(false);

const mostrarCagliostro = () => {
    mostrarInfoCagliostro.value = !mostrarInfoCagliostro.value;
};

//weaponCagliostro

const weaponCagliostro = ref(false);

const weaponOnCagliostro = () => {
    weaponCagliostro.value = !weaponCagliostro.value;
};

///////////////////////////////////////////////////

</script>

<style scoped>
@import './StylesComponents/characters.css';
</style>
