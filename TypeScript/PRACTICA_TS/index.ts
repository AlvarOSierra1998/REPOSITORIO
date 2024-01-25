import * as readlineSync from 'readline-sync';


class Jugador {
    nombre: string
    puntos_salud: number = 20;
    puntos_ataque: number = 0;
    dinero: number = 2;
    //CONSTRUCTOR
    constructor(nombre: string) {
        this.nombre = nombre;
    }


    //GETTERS & SETTERS
    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getSalud() {
        return this.puntos_salud;
    }

    public setSalud(puntos_salud: number) {
        this.puntos_salud = puntos_salud;
    }

    public getAtaque() {
        return this.puntos_ataque;
    }

    public setAtaque(puntos_ataque: number) {
        this.puntos_ataque = puntos_ataque;
    }

    public getDinero() {
        return this.dinero;
    }

    public setDinero(dinero: number) {
        this.dinero = dinero;
    }



    //METODOS JUGADOR
    calcularFuerzaInicial(min: number, max: number) {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (max + min) + min);
    }
}



class Enemigo {
    private nombre: string;
    private puntos_ataque: number = 0;
    //private puntos_salud:number;

    //CONSTRUCTOR
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //GETTERS & SETTERS
    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }


    //METODOS ENEMIGO
    calcularFuerzaEnemigo(min: number, max: number) {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (max + min) + min);
    }

    soltarDinero() {
        return Math.floor(Math.random() * (10 - 5) + 1);

    }

}

function Main(): void {


    function mostrarMenu(){
        console.log("****MOSTRAR MENU*****")
    }

    const Alvaro: object = new Enemigo("Alvaro Olmos Sierra");
    const Cifuentes: object = new Enemigo("Cifuentes");
    const Pablo: object = new Enemigo("Pablo Motril");
    const Ramirez: object = new Enemigo("Ramirez");
    const enemigos: Enemigo[] = [this.Alvaro, this.Cifuentes, this.Pablo, this.Ramirez];


    const lore: string = "Este juego consiste en una comparación entre los diferentes ataques que tengan los jugadores y los enemigos, el que tenga mayor resultado tendra la ventaja ";
    console.log(lore);


    let nombreUsuario: string = readlineSync.question("Introduce tu nombre");
    console.log("Bienvenido: " + nombreUsuario + "!");
    const jugador = new Jugador(nombreUsuario);

    //numeor aleatorio que coga de la posicion del array el enemigo

    const enemigo_actual = EnemigoRandom();
    console.log(enemigo_actual);


    //luego calcular la fuerza del enemigo y compararla con el jugador
    function EnemigoRandom() {
        let posicion:number = Math.random() * 3;
        return enemigos[posicion];
    }
    jugador.setAtaque(jugador.calcularFuerzaInicial(1,10));
    
}

Main();

/*REPASAR
const jugador = new Jugador("Alvaro");
const calcularFuerza = jugador.calcularFuerzaInicial(5, 10);
const fuerzaAleatoria = calcularFuerza();
console.log(fuerzaAleatoria); // Imprime un valor aleatorio dentro del rango (5, 10)*/








