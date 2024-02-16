
<template>
    <!--MAIN-->
    <section>
        <!--lista perosnajes-->
        <h1>Characters</h1>
        <div>
            <div class="botones">
                <button @click="mostrarVaseraga" :class="{ vaseragaB: mostrarVaseraga }">
                    <h2>Vaseraga</h2>
                </button>
                <button @click="mostrarVane" :class="{ vaneB: mostrarVane }">
                    <h2>Vane</h2>
                </button>
                <button @click="mostrarKatalina" :class="{ KatalinaB: mostrarKatalina }">
                    <h2>Katalina</h2>
                </button>
                <button @click="mostrarPercival" :class="{ PercivalB: mostrarPercival }">
                    <h2>Percival</h2>
                </button>
                <button @click="mostrarIo" :class="{ IoB: mostrarIo }">
                    <h2>Io</h2>
                </button>
                <button @click="mostrarYodarha" :class="{ YodarhaB: mostrarYodarha }">
                    <h2>Yodarha</h2>
                </button>
                <button @click="mostrarRackam" :class="{ RackamB: mostrarRackam }">
                    <h2>Rackam</h2>
                </button>
                <button @click="mostrarEugen" :class="{ EugenB: mostrarEugen }">
                    <h2>Eugen</h2>
                </button>
                <button @click="mostrarRosetta" :class="{ RosettaB: mostrarRosetta }">
                    <h2>Rosetta</h2>
                </button>
                <button @click="mostrarLancelot" :class="{ LancelotB: mostrarLancelot }">
                    <h2>Lancelot</h2>
                </button>
                <button @click="mostrarSiegfried" :class="{ SiegfriedB: mostrarSiegfried }">
                    <h2>Siegfried</h2>
                </button>
                <button @click="mostrarCharlotta" :class="{ CharlottaB: mostrarCharlotta }">
                    <h2>Charlotta</h2>
                </button>
                <button @click="mostrarNarmaya" :class="{ NarmayaB: mostrarNarmaya }">
                    <h2>Narmaya</h2>
                </button>
                <button @click="mostrarZeta" :class="{ ZetaB: mostrarZeta }">
                    <h2>Zeta</h2>
                </button>
                <button @click="mostrarFerry" :class="{ FerryB: mostrarFerry }">
                    <h2>Ferry</h2>
                </button>
                <button @click="mostrarGha" :class="{ GhaB: mostrarGha }">
                    <h2>Ghandagoza</h2>
                </button>
                <button @click="mostrarCagli" :class="{ CagliB: mostrarCagli }">
                    <h2>Cagliostro</h2>
                </button>
            </div>
            <div v-if="mostrarInfo" :class="{ vaseragaInfo: mostrarInfo }">
                <img class="imgvas" src="../assets/img/vaseraga.png" alt="Vaseraga">
                <blockquote class="txtVa">
                    <p>
                    <h2>Vaseraga</h2>
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
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoV" :class="{ VaneInfo: mostrarInfoV }">
                <img class="imgvas" src="../assets/img/Vane.png" alt="Vane">
                <blockquote class="txtVa">
                    <p>
                    <h2>Vane</h2>
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
                    <h2>KATALINA</h2>
                    <q>
                        <i>

                            Skybound Protector
                            Katalina once swore an oath of knighthood to the Erste Empire, but those days are long
                            behind her. Her knightly duty continues, though now in the service of protecting Lyria.
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsKatalina">Stats</button>
                    <ul v-if="estadisticasInfoKatalina">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="estoqueOn">Weapon</button>
                    <!---ALABARDA-->
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
                    <h2>PERCIVAL</h2>
                    <q>
                        <i>
                            Lord of Flames
                            Possessing the makings of a king, this young man strives to create a kingdom free of war with
                            other like-minded individuals.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsPercival">Stats</button>
                    <ul v-if="estadisticasInfoPercival">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="espadaOn">Weapon</button>
                    <!---ALABARDA-->
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
                </blockquote>
            </div>
        </div>
    </section>
    <!---IO---->
    <section>
        <!--lista perosnajes-->
        <div>
            <!---es una clase el vaseraga info-->
            <div v-if="mostrarInfoIo" :class="{ IoInfo: mostrarInfoIo }">
                <img class="imgvas" src="../assets/img/Io.png" alt="Io">
                <blockquote class="txtVa">
                    <p>
                    <h2>Io</h2>
                    <q>
                        <i>
                            Skybound Dreamer
                            Don't let her small size fool you. This young mage is eager to showcase her impressive talent.
                            She vows to bring smiles to the world
                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsIo">Stats</button>
                    <ul v-if="estadisticasInfoIo">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="BastonOn">Weapon</button>
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
                    <h2>Yodarha</h2>
                    <q>
                        <i>
                            Illusory Fencer

                            This man was once a world-renowned swordsman, but these days he spends much of his time fishing
                            in seclusion.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsYodarha">Stats</button>
                    <ul v-if="estadisticasInfoYodarha">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="katanaYodarha">Weapon</button>
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
                    <h2>Rackam</h2>
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
                    <button @click="statsRackam">Stats</button>
                    <ul v-if="estadisticasInfoRackam">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="pistolaRackam">Weapon</button>
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
                    <h2>Eugen</h2>
                    <q>
                        <i>

                            Skybound Soldier
                            A veteran skyfarer whose combat prowess is rivaled only by his regret.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsEugen">Stats</button>
                    <ul v-if="estadisticasInfoRackam">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="pistolaEugen">Weapon</button>
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
                    <h2>Rosetta</h2>
                    <q>
                        <i>
                            Skybound Songstress
                            A songstress who can hear the voices of the earth. She travels the skies in search of the
                            source of her power.

                        </i>
                    </q>
                    </p>
                    <!---Stats--->
                    <button @click="statsRosetta">Stats</button>
                    <ul v-if="estadisticasInfoRosetta">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                    <!---WEAPON-->
                    <button @click="dagaRosetta">Weapon</button>
                    <!---Pistola-->


                    <div v-if="daga">
                        <div class="table-title">
                            <h2><i>Harmonie</i></h2>
                        </div>
                        <table class="table-fill">
                            <thead>
                                <tr>
                                    <td class="tdinfoV">
                                        A songstress's weapon, a gift from the earth. It's said that the earth itself
                                        bestowed this weapon upon her, and that it's the source of her power. The songstress
                                        travels the skies in search of the source of her power.

                                    </td>
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
const daga= ref(false);
const dagaRosetta = () => {
    daga.value = !daga.value;
};

</script>

<style scoped>@import './StylesComponents/characters.css';</style>
