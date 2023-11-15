/**
 * 
 * Ejercicio 1: Crea una función que reciba un array de valores enteros (positivos y negativos),
y devuelva otro array con la suma parcial de cada elemento del array que se pasa como
parámetro.
Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los anteriores a él.
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,16]
 * 
 */

function ej1() {
    //enlace con el DOM hacia le html
    let arrayej1 = document.getElementById("arra");
    //creacion del primer array que recibe los datos por parametro 
    let array = [];
    // la variable numeros almacena los numeros introducidos metiante el promt
    let numeros;
    //nuevo array que guarda la suma de los numeros + el anterior array
    let sumarray = [];
    //bucle while que recorre de manera infinita los numeros que introduces por parametro
    //si en el cuadro de texto pones fin sale del bucle
    while (numeros !== "fin") {
        numeros = prompt("introduce numero");
        if (numeros !== "fin") {
            //añade al array1 los numero que metes por parametro
            array.push(parseInt(numeros));
        }
    }
    //se crea una sumatoria que almacenará los numeros que se sumarán
    let sumatoria = 0;
    for (let i = 0; i < array.length; i++) {
        //suma cada numero que se pasa por parametros en el primer array y se almacenan en la sumatoria
        sumatoria += array[i];
        //el resultado de la suma lo almaceno en el nuevo array
        sumarray.push(sumatoria);
    }
    //imprimo por pantalla
    arrayej1.innerHTML = "el array principal es [" + array + " ] y la suma de este es [ " + sumarray + " ]";
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ejercicio 2: Crea una función llamada countBy la cual recibirá dos números enteros
positivos: X e Y. Esta función debe devolver lo siguiente:
     Si alguno de los números es negativo devolverá un array vacío.
     Sino, devolverá con array con los Y primeros múltiplos de X empezando por el 1
    (incluido)*/
function countBy() {
    let arraycountBy = document.getElementById("arra2");
    const X = parseInt(prompt("Ingresa un número entero positivo para X:"));
    const Y = parseInt(prompt("Ingresa un número entero positivo para Y:"));

    if (X < 0 || Y < 0) {
        arraycountBy.innerHTML = "Los valores ingresados son negativos. No se puede realizar el cálculo.";
        return [];
    }

    const resultados = [];
    for (let i = 1; i <= Y; i++) {
        resultados.push(X * i);
    }

    arraycountBy.innerHTML = "Los primeros " + Y + " múltiplos de " + X + " son: " + resultados.join(", ");
    return resultados;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Ejercicio 3: Crea un script que pida al usuario un numero entero positivo N mayor a 2. Hay
    que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.
    A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
    multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en forma de
    matriz”
    Ej: Para el número 3, el programa debe mostrar
    03 06 09
    12 15 18
    21 24 27
 * 
 * 
 * 
 *  */

function ej3() {
    //creacion de la variable que almacena el numero que se pasa por parametro
    let numerosUser;
    let arra3 = document.getElementById("arra3");
    //dowsile comprobacion de que el numero introducido es mayor a dos
    do {
        numerosUser = prompt("introduce numero");
    }
    //hacemos restriccion de que sea un numero
    while (isNaN(numerosUser) || numerosUser <= 2); //
    //creamos una matriz vacia que se ira rellenando las filas y las multiplicaciones
    let matriz = [];
    //contador que va haciendo la multiplicacion por cada numero
    let contador = 1;
    //for que añade el numero que pasar por parametro para representar una fila, es decir si pongo 3, esto creara una fila de 3 posiciones
    for (let i = 0; i <= numerosUser; i++) {
        //las filas previas dichas    
        var fila = [];
        //este bucle rellena la fila 
        for (let j = 0; j <= numerosUser; j++) {
            //añade los elementos y los multiplicaciones
            fila.push(numerosUser * contador);
            contador++;
        }
        //añade los elementos de la fila  a la matriz
        matriz.push(fila);
    }
    //muestra la matriz
    for (var i = 0; i < numerosUser; i++) {
        arra3.innerHTML += "<span>| </span>";
        for (var j = 0; j < numerosUser; j++) {
            arra3.innerHTML += matriz[i][j] + " ";
        }
        arra3.innerHTML += "<span> |</span> <br>"; // Agregar un salto de línea después de cada fila
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ejercicio 4: Escriba una función que reciba dos arrays y devuelva un nuevo array con los
elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo array). El
orden debe ser: primero los que están en el primer array y luego los que están en el segundo.
Ejemplos:
[1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
["Ray", "Jose", "Dani"] y ["Dani", "Jose", "Ivan"]) ==> ["Ray","Ivan"]
[77, "ciao"] y [78, 42, "ciao"]) ==> [77, 78, 42]
[1, 2, 3, 3] y [3, 2, 1, 4, 5, 4]) ==> [4,5]






/****
 * 
 * Ejercicio 5: Define un array con los siguientes colores: red, yellow, green, white,
blue, brown, pink y black. A continuación crea un generador aleatorio de banderas:
1. Se pide el numero de franjas de va a tener la bandera (entre 1 y 5).
2. El programa obtiene de forma aleatoria 5 colores del array.
3. Usando document.write, crea una tabla de una fila y tantas columnas como colores
tenga la bandera generada. Usa el atributo style para rellenar el fondo de cada celda del
color adecuado.
a) En el paso 2 se pueden repetir colores en la bandera.
b) en el paso 2 NO se pueden repetir colores en la bandera.
c) En el paso 2 se pueden repetir colores mientras no sean consecutivos (es decir, no puede
haber dos franjas juntas con el mismo color)
 * 
 */

function arra5() {
    const color = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
    let num;
    do {
        num = parseInt(prompt("Introduce el número de franjas (entre 1 y 5):"));
    } while (num < 1 || num > 5);

    const flagColors = [];
    let previousColor = '';

    for (let i = 0; i < num; i++) {
        let randomIndex;
        
        // Opción c): No repetir colores consecutivos
        do {
            randomIndex = Math.floor(Math.random() * color.length);
        } while (color[randomIndex] === previousColor);
        
        flagColors.push(color[randomIndex]);
        previousColor = color[randomIndex];
    }

    document.write("<table><tr>");

    for (let i = 0; i < flagColors.length; i++) {
        document.write("<td style=' width: 50px; height: 50px; background-color: " + flagColors[i] + ";'></td>");
    }

    document.write("</tr></table>");
}

/***
 * 
 * 
 * Ejercicio 6: Usando el array de colores del ejercicio anterior, crea un script que solicite 8
palabras al usuario y las almacene en otro array.
Ordena ese array (el del usuario) de forma que si aparecen colores del array de colores, estos
queden al principio del array y el resto de palabras al final. Muestralo por consola.
Ejemplo:
Array de palabras del usuario:
casa blue green orden brown bombilla bici pink
Array resultante:
blue green brown pink casa orden bombilla bici
 */
/*
function arr6(){
    const colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
    const arrayWord = [];
    do {
        word =(prompt("introduce las 8 palabras"));
        
    } while (word < 1 || word > 8);
    word.push(arrayWord);
    
    if(arrayWord.includes(colores)){
        colores.sort((colores, arrayWord) => colores - arrayWord);
    }
    console.log(arrayWord);


}*/
/*
function ordenarPalabras() {
    const colores = ["rojo", "verde", "azul", "amarillo", "rosa", "naranja", "violeta", "negro"];
    const palabrasUsuario = [];

    // Solicitar 8 palabras al usuario
    for (let i = 0; i < 8; i++) {
        const palabra = prompt(`Introduce una palabra (${i + 1}/8):`);
        palabrasUsuario.push(palabra);
    }

    // Separar palabras que son colores del array de colores
    const palabrasColores = palabrasUsuario.filter(palabra => colores.includes(palabra));
    const palabrasRestantes = palabrasUsuario.filter(palabra => !colores.includes(palabra));

    // Combinar las dos listas de palabras
    const palabrasOrdenadas = palabrasColores.concat(palabrasRestantes);

    console.log("Array de palabras ordenado:");
    console.log(palabrasOrdenadas);
}

// Llama a la función para ejecutar el código
ordenarPalabras();
*/


/***
 * 
 * Ejercicio 7: Crea una función llamada likes la cual va a recibir como único parámetro un
array de nombres. Esta función debe devolver una cadena siguiendo el patrón que se muestra
en el ejemplo siguiente:
[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Max", "John", "Mark"] --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"
Nota: para este ejercicio no se permiten usar funciones de arrays u operadores especiales de Javascript
 */

function like() {
    let arrayVacio = []
    let personas;
    let likes;
    let otros;
    let resultados;


    while (true) {
        personas = prompt("introduce las personas ");
        if (personas === "fin") {
            break;
        }
        arrayVacio.push(personas);
    }

    likes = arrayVacio.length;

    if (likes === 0) {
        resultados = ([] + " no one like this ");
    } else if (likes === 1) {
        resultados = (arrayVacio[0] + " like this ");
    } else if (likes === 2) {
        resultados = (arrayVacio[0] + " and " + arrayVacio[1] + " like this ");
    } else if (likes === 3) {
        resultados = (arrayVacio[0] + " , " + arrayVacio[1] + " , " + arrayVacio[2] + " like this ");
    } else {
        otros = likes - 2;
        resultados = (arrayVacio[0] + " , " + arrayVacio[1] + " and " + otros + " 2 others like this ");
    }

    array7.innerHTML = " [ " + arrayVacio + " ] " + "--->" + resultados;

}