class Jugador{
    nombre: string
    puntos_salud: number = 20;
    puntos_ataque: number = 0;
    dinero: number = 2;

    constructor(nombre:string){
        this.nombre = nombre; 
    }
    /*REPASAR
    calcularFuerzaInicial(min:number,max:number){
        return()=>{
            Math.random()*this.puntos_ataque*(max-min) + min;
        }
    
        
    }*/
}

/*REPASAR
const jugador = new Jugador("Alvaro");
const calcularFuerza = jugador.calcularFuerzaInicial(5, 10);
const fuerzaAleatoria = calcularFuerza();
console.log(fuerzaAleatoria); // Imprime un valor aleatorio dentro del rango (5, 10)*/


class Enemigo{
    private nombre:string;
    private puntos_ataque:number;
}





