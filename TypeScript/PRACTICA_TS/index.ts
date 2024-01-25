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
    calcularFuerzaInicial() {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (1 + 10) + 1);
    }
    mostrarEstadisticas() {

        console.log("===== Estadísticas del Jugador =====");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Vida: ${this.puntos_salud}`);
        console.log(`dinero: ${this.dinero}`);
        console.log(`Ataque: ${this.puntos_ataque}`);
        console.log("=====================================");


    }



    toString(): string {
        return `Las Estadisticas son:  ${this.nombre}, ${this.puntos_salud}, ${this.dinero}, ${this.puntos_ataque}`;
    }
}




class Enemigo {
    nombre: string;
    puntos_ataque: number = 0;
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

    public getPuntos_ataque() {
        return this.puntos_ataque;
    }
    public setPunt_ataque(puntos_ataque: number) {
        this.puntos_ataque = puntos_ataque;
    }

    //METODOS ENEMIGO
    calcularFuerzaEnemigo() {
        /*return()=>{
           this.puntos_ataque = Math.floor(Math.random() *(max + min) + min);
        }*/
        return this.puntos_ataque = Math.floor(Math.random() * (1 + 10) + 1);
    }

    soltarDinero() {
        return Math.floor(Math.random() * (10 - 5) + 1);

    }

}

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



function Main(): void {


    /*OBJETOS TIENDA
    const ArmaduraPlacas = new Tienda("Armadura de placas", 0, 50, 100);*/
    

    //OBJETOS ENEMIGOS
    const Alvaro = new Enemigo("Alvaro Olmos Sierra");
    const Cifuentes = new Enemigo("Cifuentes");
    const Pablo = new Enemigo("Pablo Motril");
    const Ramirez = new Enemigo("Ramirez");
    const enemigos: Enemigo[] = [Alvaro, Cifuentes, Pablo, Ramirez];

    let nombreUsuario: string = readlineSync.question("Introduce tu nombre ");
    console.log("Bienvenido:  " + nombreUsuario + "!");

    //OBJETO JUGADOR;
    const jugador = new Jugador(nombreUsuario);

    const lore: string = "Este juego consiste en una comparación entre los diferentes ataques que tengan los jugadores y los enemigos, el que tenga mayor resultado tendra la ventaja ";
    console.log(lore);

    jugador.setAtaque(jugador.calcularFuerzaInicial());


    //CAMBIAR LA FUERZA POR dinero
    let decision;

    do {
        console.log('Tu fuerza inicial es ' + jugador.getAtaque());
        decision = readlineSync.keyInYNStrict('Quieres cambiar tu fuerza por 1 dinero?');

        if (decision) {
            if (jugador.getDinero() >= 1) {
                jugador.setAtaque(jugador.calcularFuerzaInicial());
                jugador.setDinero(jugador.getDinero() - 1);
                console.log('Tu nueva fuerza es ' + jugador.getAtaque());
                console.log(" ");
            } else {
                console.log('No tienes suficiente dinero para cambiar la fuerza.');
                console.log(" ");
            }
        }
        console.log();
    } while (decision);

    mostrarMenu();




    function mostrarMenu() {

        console.log("****MOSTRAR MENU*****")
        console.log("1. Luchar contra el enemigo");
        console.log("2. Comprar ítems");
        console.log("3. Consultar tus estadísticas");
        console.log("4. Salir del juego");
        console.log("*********************");
        let continuar = true;

        while (continuar) {

            //comprobar 
            const opcion = readlineSync.question("Selecciona una opcion:");

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
        function EnemigoRandom(): Enemigo {
            let posicion: number = Math.floor(Math.random() * 3);
            enemigos[posicion].setPunt_ataque(enemigos[posicion].calcularFuerzaEnemigo());
            return enemigos[posicion];
        }

        function Perder(){
            comparacion_valores = enemigo_actual.getPuntos_ataque()-jugador.getAtaque();
            //CAMBIA LA SALUD
            jugador.setSalud(jugador.getSalud()-comparacion_valores);
            console.log(" Has perdido, " + enemigo_actual.getNombre() + " te ha golpeado" + " tu vida ha bajado " + comparacion_valores + " puntos de vida ");
        }
        
        //variables que saca un enemigo aleatorio
        let enemigo_actual = EnemigoRandom();
        //variable que almacena la comparcion de valores
        let comparacion_valores;
        //muestra el nombre del enemigo
        console.log(enemigo_actual.getNombre());
        //CASO VICTORIA
        if(jugador.getAtaque() >= enemigo_actual.getPuntos_ataque()){
            //variable que almacena el dinero que el enemigo dropea
            let dineroAlmacenao = enemigo_actual.soltarDinero();
            //mensaje de victoria
            console.log("Has ganado!" + enemigo_actual.getNombre() + "Ha soltado " + dineroAlmacenao+ "De dinero");
            //establecemos el din
            
            jugador.setDinero(jugador.getDinero() + dineroAlmacenao );
            
        }else{
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
        
        const opcion = readlineSync.question("¿Que quieres comprar?:");
            switch (opcion) {
                case '1':
                    if (jugador.dinero >= 50) {
                        jugador.dinero -= 50;
                        jugador.puntos_ataque += 10;
                        console.log("Has comprado una Espada. ¡Tu ataque ha aumentado!");
                    } else {
                        console.log("No tienes suficiente dinero para comprar este objeto.");
                    }
                    break;
                case '2':
                    if (jugador.dinero >= 30) {
                        jugador.dinero -= 30;
                        jugador.puntos_salud += 20;
                        console.log("Has comprado una Poción de curación. ¡Tu salud ha aumentado!");
                    } else {
                        console.log("No tienes suficiente dinero para comprar la Poción de curación.");
                    }
                    break;
                case '3':
                    if (jugador.dinero >= 100) {
                        jugador.dinero -= 100;
                        jugador.puntos_ataque += 20;
                        console.log("Has comprado una espada bastarda. ¡Tu ataque ha aumentado!");
                    } else {
                        console.log("No tienes suficiente dinero para comprar la espada bastarda.");
                    }
                    break;
                default:
                    console.log("Opción no válida.");
                    break;
            }
        };
        mostrarPanelItems();
        comprarItems();
    }
    
Main();






