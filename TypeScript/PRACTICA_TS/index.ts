class Jugador{
    nombre: string
    puntos_salud: number = 20;
    puntos_ataque: number = 0;
    dinero: number = 2;

    constructor(nombre:string){
        this.nombre = nombre; 
    }
    
}

class Enemigo{
    private nombre:string;
    private puntos_ataque:number;
}