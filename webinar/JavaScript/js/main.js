/*KATA 1 hoisting*

var country = "espiña";
const year = "2023";
console.log(country,year);

/*KATA2*
let string = "calle recta , 23";
console.log(typeof string);
let numero = 12;
console.log(typeof numero);
let boolean = true;
console.log(typeof boolean);

/*funciones*
function printGreet(){
    return "Hello"
}
let resul = printGreet();
console.log(resul);

function getCopy(){
    let copy = "alvaro - olmos- Sierra";
    return copy;
}
let resul2 = getCopy();
console.log(resul2);

/*prevenir hoisting funciones*

let func = function(para1){
    return para1;
}
/*callback* tiene como valor una funcion que va a ser invocada dentero del cuerpo de otra funcion*

function call(name, year, callback){
    let call = callback(name, year,)
    return call;

}
/*funciones*/

/*funcion anonima*
let result = function (name, year){
    let copyright = name + " - " + year;
    return copyright;

}
console.log(result("pepe"));

/*autoinvocadas*
(function(year){
    console.log(year);
})("Alvaro", 1998);*/


/*COntextMenu boton secundario raton*/


/**
 * 
 * Lo de abajo hace que no se ejecute el evento click en el resto dle DOM,  ya que el ODM actua de manera jerarquica hacia arriba
 */
/*let enlace = document.querySelector("a.registro");
enlace.addEventListener("click", function (event) {
    enlace.stopPropagation();
    console.info(event)
});


document.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    console.warn(event)
})

/*KATA*
document.querySelector(".test").addEventListener("click", function (event) {
    enlace.stopPropagation();
    alert("click");

});

/*document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("menu no disponibol")
});
*
window.addEventListener("click", function (event) {

    console.log("click");
});
*/

/*
let texto = document.querySelector(".saluda");
let button = document.querySelector(".boton");

button.addEventListener("click", function (event) {
    
    if(texto.value != ""){
        alert("hola " + texto.value);
        texto.value = "";
    }
    
    
});*/

var jugador = {
    fuerza: 1,
    incrementar_fuerza: function(){
        this.fuerza += 1;
    },
    consultar_fuerza: function(){
        console.log("la fuerza es " + this.fuerza);
    }
};
jugador.consultar_fuerza();
jugador.incrementar_fuerza();
jugador.consultar_fuerza();
jugador.incrementar_fuerza();
jugador.consultar_fuerza();


function random(nummax){
    return Math.round(Math.random() * nummax);
}
console.log(random(100));


var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0 ){
        console.log(numeros[i]);
    }
    
    
}
var numerosSuma = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var total = 0;

for (let i = 0; i < numeros.length; i++) {
    total += numerosSuma[i];
    
    
}
console.log("el total es " + total);







