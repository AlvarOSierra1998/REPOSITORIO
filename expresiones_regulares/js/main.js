/****
 * 1.- Crea un documento HTML con dos DIV. Crea un script que, cada vez que se mueva
    el ratón, indique las posiciones de este de la forma (posX,posY). Usa el primer div para
    mostrar esa información.
    Además, cuando se pulse alguno de los botones del ratón, en el segundo DIV se debe
    mostrar qué botón se ha pulsado (Izquierdo , derecho o central).
    También debe impedir que aparezca el menú contextual al pulsar el botón derecho del
    ratón.
 * 
 */
//Creación de función para asociar los divs
document.addEventListener('DOMContentLoaded', function () {
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    // Función para mostrar las posiciones del ratón en el div1
    document.addEventListener('mousemove', function (event) {
        //clientX & clientY coje los ejes X & Y al mover el ratón
        var posX = event.clientX;
        var posY = event.clientY;
        //lo muestra con innerText
        div1.innerText = '( PoX:' + posX + ', PoY:' + posY + ')';
    });

    // Función para mostrar el botón pulsado en el div2
    document.addEventListener('mousedown', function (event) {
        var buttonPressed = '';
        //switch para cambiar entre botones, le especificamos que el evento que se pasa por la funcion sera un boton
        switch (event.button) {
            case 0:
                buttonPressed = 'Izquierdo';
                break;
            case 1:
                buttonPressed = 'Central';
                break;
            case 2:
                buttonPressed = 'Derecho';
                break;
        }
        //lo muestra en el segundo div
        div2.innerText = 'Botón pulsado: ' + buttonPressed;
    });

    // Impedir el menú contextual al pulsar el botón derecho
    document.addEventListener('contextmenu', function (event) {
        //con preventDefault eliminamos o paramos los eventos por defecto pasados por parametros
        event.preventDefault();
    });
});


/**
 * 2.- Crea un documento HTML que tenga de un título h1 con el texto <<Pulsa una tecla>>,
    y un DIV central de 300x300px maquetado para que se vea bien (borde, tamaño de letra
    alto, color de fondo...) Utiliza el evento keypress para determinar qué carácter ha escrito
    el usuario utilizando el teclado y muestralo dentro del div.
 * 
 */
//acedemos al id donde se mostraran las letras pulsadas
const log = document.getElementById("log");
//cogemos el elemento input para añadirle un evento
const input = document.querySelector("input");
//se le añade el evento kyepress con la funcion log key que recogerá el eveento pulsado en este caso una tecla
input.addEventListener("keypress", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

/****
 * 
 * 3. Crea un documento HTML que conste de un título h1 con el texto <<Usa los
    cursores>>, y un DIV de tamaño 100x100px (maquetado con borde color negro y color
    de fondo rojo).
    Utiliza el evento keypress para determinar si el usuario pulsa una tecla del teclado, y en
    caso afirmativo, utilizando CSS haz que el DIV se desplace 20px en la dirección elegida
    por el usuario. Evita que se salga de los bordes del documento. Debe poder permitirse
    tanto las flechas de dirección como “wasd”
 * 
 */

//creación de variables y evento al pulsar las flechas
var cuadro = document.getElementById('cuadroMove');
document.addEventListener('keydown', handleKeyPress);

//funcion para realizar los movimientos
function handleKeyPress(e) {
    //saca el valor de los estilos.
    let style = getComputedStyle(cuadro);
    let top = parseInt(style.top);
    let left = parseInt(style.left);
    var key = e.key;
    //asociamos el rango de movimiento
    switch (key) {
        case 'ArrowUp':
            top = Math.max(0, top - 20);
            break;
        case 'ArrowDown':
            top = Math.min(window.innerHeight - cuadro.offsetHeight, top + 20);
            break;
        case 'ArrowLeft':
            left = Math.max(0, left - 20);
            break;
        case 'ArrowRight':
            left = Math.min(window.innerWidth - cuadro.offsetWidth, left + 20);
            break;
    }

    //expresa los valores en px
    cuadro.style.top = top + 'px';
    cuadro.style.left = left + 'px';
}

/***
 * 
 * 5.
 * Crea un script que valide un DNI español usando expresiones regulares. El DNI está
    compuesto de 8 dígitos entre el cero y el nueve y una letra mayúscula
 */

function validarDNI(dni) {
    // Definir la expresión regular para un DNI español
    const patronDNI = /^\d{8}[A-Za-z]$/;

    // Verificar si el DNI coincide con el patrón
    if (patronDNI.test(dni)) {
        const numeros = dni.slice(0, -1);  // Obtener los primeros 8 dígitos
        const letra = dni.slice(-1).toUpperCase();  // Obtener la letra y convertirla a mayúscula

        // Calcular la letra esperada a partir de los números
        const letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const indice = parseInt(numeros, 10) % 23;
        const letraEsperada = letrasPosibles.charAt(indice);

        // Comparar la letra calculada con la letra del DNI
        return letra === letraEsperada;
    } else {
        return false;
    }
}

// Ejemplo de uso
const dni = prompt("Introduce un DNI español: ");
if (validarDNI(dni)) {
    alert("El DNI es válido.");
} else {
    alert("El DNI no es válido.");
}



