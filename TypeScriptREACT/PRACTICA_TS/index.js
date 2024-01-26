"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Jugador = /** @class */ (function () {
    //CONSTRUCTOR
    function Jugador(nombre) {
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
        this.nombre = nombre;
    }
    //GETTERS & SETTERS
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Jugador.prototype.getSalud = function () {
        return this.puntos_salud;
    };
    Jugador.prototype.setSalud = function (puntos_salud) {
        this.puntos_salud = puntos_salud;
    };
    Jugador.prototype.getAtaque = function () {
        return this.puntos_ataque;
    };
    Jugador.prototype.setAtaque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    //METODOS JUGADOR
    Jugador.prototype.calcularFuerzaInicial = function () {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (1 + 10) + 1);
    };
    Jugador.prototype.mostrarEstadisticas = function () {
        console.log("===== Estadísticas del Jugador =====");
        console.log("Nombre: ".concat(this.nombre));
        console.log("Vida: ".concat(this.puntos_salud));
        console.log("dinero: ".concat(this.dinero));
        console.log("Ataque: ".concat(this.puntos_ataque));
        console.log("=====================================");
    };
    Jugador.prototype.toString = function () {
        return "Las Estadisticas son:  ".concat(this.nombre, ", ").concat(this.puntos_salud, ", ").concat(this.dinero, ", ").concat(this.puntos_ataque);
    };
    return Jugador;
}());
var Enemigo = /** @class */ (function () {
    //private puntos_salud:number;
    //CONSTRUCTOR
    function Enemigo(nombre) {
        this.puntos_ataque = 0;
        this.nombre = nombre;
    }
    //GETTERS & SETTERS
    Enemigo.prototype.getNombre = function () {
        return this.nombre;
    };
    Enemigo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Enemigo.prototype.getPuntos_ataque = function () {
        return this.puntos_ataque;
    };
    Enemigo.prototype.setPunt_ataque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    //METODOS ENEMIGO
    Enemigo.prototype.calcularFuerzaEnemigo = function () {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (1 + 10) + 1);
    };
    Enemigo.prototype.soltarDinero = function () {
        return Math.floor(Math.random() * (10 - 5) + 1);
    };
    return Enemigo;
}());
//PRUEBAS DE LA TIENDA
/*class Tienda {
    nombre: string
    ataque: number;
    defensa: number;
    dinero: number;
    //CONSTRUCTOR
    constructor(nombre: string, ataque: number, defensa: number, dinero: number) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.dinero = dinero;
    }
}*/
function Main() {
    /*OBJETOS TIENDA
    const ArmaduraPlacas = new Tienda("Armadura de placas", 0, 50, 100);*/
    //OBJETOS ENEMIGOS
    var Gyobu_Oniwa = new Enemigo("Gyobu Oniwa");
    var Lautrec = new Enemigo("Lautrec");
    var Pablo = new Enemigo("Pablo Motril");
    var Vicaria_Amelia = new Enemigo("Vicaria Amelia");
    var enemigos = [Gyobu_Oniwa, Lautrec, Pablo, Vicaria_Amelia];
    var nombreUsuario = readlineSync.question("Introduce tu nombre ");
    console.log("Bienvenido:  " + nombreUsuario + "!");
    //OBJETO JUGADOR;
    var jugador = new Jugador(nombreUsuario);
    var lore = " Bienvenido a este mundo viajero, este videojuego es una simulacion de combate RPGs en el te enfrentaras a enemigos conocidos de la franquicia de juegos de FromSoftware, además, podras comprar objetos con los tesoros que obtenga de derrotar a tus enemigos. tus estadisticas son tu piedra angular, consigue dinero para poder comprar items y poder volverte mas fuerte en tu viaje.";
    console.log(lore);
    jugador.setAtaque(jugador.calcularFuerzaInicial());
    //CAMBIAR LA FUERZA POR dinero
    var decision;
    do {
        console.log('Tu fuerza inicial es ' + jugador.getAtaque());
        decision = readlineSync.keyInYNStrict('Quieres cambiar tu fuerza por 1 dinero?');
        if (decision) {
            if (jugador.getDinero() >= 1) {
                jugador.setAtaque(jugador.calcularFuerzaInicial());
                jugador.setDinero(jugador.getDinero() - 1);
                console.log('Tu nueva fuerza es ' + jugador.getAtaque());
                console.log(" ");
            }
            else {
                console.log('No tienes suficiente dinero para cambiar la fuerza.');
                console.log(" ");
            }
        }
        console.log();
    } while (decision);
    mostrarMenu();
    function mostrarMenu() {
        console.log("****MOSTRAR MENU*****");
        console.log("1. Luchar contra el enemigo");
        console.log("2. Comprar ítems");
        console.log("3. Consultar tus estadísticas");
        console.log("4. Salir del juego");
        console.log("*********************");
        var continuar = true;
        while (continuar) {
            //comprobar 
            var opcion = readlineSync.question("Selecciona una opcion:");
            switch (opcion) {
                case '1':
                    console.log("Luchando contra el enemigo...");
                    Luchar();
                    break;
                case '2':
                    console.log("Comprando ítems...");
                    mostrarPanelItems();
                    comprarItems();
                    break;
                case '3':
                    console.log("Consultando estadísticas...");
                    jugador.mostrarEstadisticas();
                    break;
                case '4':
                    console.log("Saliendo del juego. ¡Hasta luego!");
                    continuar = false;
                    break;
                default:
                    console.log("Opción no válida. Por favor, selecciona una opción válida.");
                    break;
            }
        }
    }
    function Luchar() {
        //luego calcular la fuerza del enemigo y compararla con el jugador
        function EnemigoRandom() {
            var posicion = Math.floor(Math.random() * 3);
            enemigos[posicion].setPunt_ataque(enemigos[posicion].calcularFuerzaEnemigo());
            return enemigos[posicion];
        }
        function Perder() {
            comparacion_valores = enemigo_actual.getPuntos_ataque() - jugador.getAtaque();
            //CAMBIA LA SALUD
            jugador.setSalud(jugador.getSalud() - comparacion_valores);
            console.log(" Has perdido, " + enemigo_actual.getNombre() + " te ha golpeado" + " tu vida ha bajado " + comparacion_valores + " puntos de vida ");
        }
        //variables que saca un enemigo aleatorio
        var enemigo_actual = EnemigoRandom();
        //variable que almacena la comparcion de valores
        var comparacion_valores;
        //muestra el nombre del enemigo
        console.log(enemigo_actual.getNombre());
        //CASO VICTORIA
        if (jugador.getAtaque() >= enemigo_actual.getPuntos_ataque()) {
            //variable que almacena el dinero que el enemigo dropea
            var dineroAlmacenao = enemigo_actual.soltarDinero();
            //mensaje de victoria
            console.log("Has ganado!" + enemigo_actual.getNombre() + "Ha soltado " + dineroAlmacenao + "De dinero");
            //establecemos el din
            jugador.setDinero(jugador.getDinero() + dineroAlmacenao);
        }
        else {
            //CASO ERROR
            console.log(Perder());
            //RESTA DE VIDA
        }
    }
    Luchar();
    /* function tienda(){
     console.log("****TIENDA*****")
     console.log("1. Armadura de placas");
     console.log("2. Espada bastarda");
     console.log("3. grajeas");
     console.log("4. Escudo redondo");
     console.log("*********************");
     let continuar = true;
 
     while (continuar) {
 
         //comprobar
         const opcion = readlineSync.question("¿Que quieres comprar?:");
 
         switch (opcion) {
             case '1':
             console.log("Has obtenido Armadura de placas");
                 
                 break;
             case '2':
                 console.log("Has obtenido la espada bastarda");
                 // Agrega lógica de compra de ítems aquí
                 break;
             case '3':
                 console.log("Has obtenido grajeas");
                 
                 break;
             case '4':
                 console.log("Has obtenido el escudo redondo");
                 continuar = false;
                 break;
             default:
                 console.log("Opción no válida. Por favor, selecciona una opción válida.");
                 break;
         }
     }
     }
     tienda();*/
    ////////////////////////////////////////////////////////////////////////
    function mostrarPanelItems() {
        console.log("===== Panel de Ítems =====");
        console.log("1. Armadura de placas (+10 defensa) - 50 dinero");
        console.log("2. Poción de curación (+20 vida) - 30 dinero");
        console.log("3. Espada bastarda (+20 ataque) - 100 dinero");
        console.log("===========================");
    }
    function comprarItems() {
        mostrarPanelItems();
        var opcion = readlineSync.question("¿Que quieres comprar?:");
        switch (opcion) {
            case '1':
                if (jugador.dinero >= 50) {
                    jugador.dinero -= 50;
                    jugador.puntos_ataque += 10;
                    console.log("Has comprado una Espada. ¡Tu ataque ha aumentado!");
                }
                else {
                    console.log("No tienes suficiente dinero para comprar este objeto.");
                }
                break;
            case '2':
                if (jugador.dinero >= 30) {
                    jugador.dinero -= 30;
                    jugador.puntos_salud += 20;
                    console.log("Has comprado una Poción de curación. ¡Tu salud ha aumentado!");
                }
                else {
                    console.log("No tienes suficiente dinero para comprar la Poción de curación.");
                }
                break;
            case '3':
                if (jugador.dinero >= 100) {
                    jugador.dinero -= 100;
                    jugador.puntos_ataque += 20;
                    console.log("Has comprado una espada bastarda. ¡Tu ataque ha aumentado!");
                }
                else {
                    console.log("No tienes suficiente dinero para comprar la espada bastarda.");
                }
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    }
    ;
    mostrarPanelItems();
    comprarItems();
}
Main();
