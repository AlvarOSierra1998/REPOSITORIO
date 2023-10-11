/*function cambiar() {
    const elementoACambiar1 = document.getElementsByClassName('.bloque1');
    const elementoACambiar2 = document.getElementsByClassName('.bloque2');
    const elementoACambiar3 = document.getElementsByClassName('.bloque3');
    const elementoACambiar4 = document.getElementsByClassName('.bloque4');
    if (elementoACambiar1.style.display == 'block') {
        elementoACambiar2.style.display = 'none';
        elementoACambiar3.style.display = 'none';
        elementoACambiar4.style.display = 'none';
    }

}
*/
/*function cambiar() {

    const elementosACambiar1 = document.getElementsByClassName('bloque1');
    const elementosACambiar2 = document.getElementsByClassName('bloque2');
    const elementosACambiar3 = document.getElementsByClassName('bloque3');
    const elementosACambiar4 = document.getElementsByClassName('bloque4');

    var interruptor = true;
    // Itera a través de la colección y oculta los elementos
    if (interruptor) {
        for (let i = 0; i < elementosACambiar1.length; i++) {
            elementosACambiar1[i].style.display = 'block';
        }
        elementosACambiar2.style.display = 'none';
        elementosACambiar3.style.display = 'none';
        elementosACambiar4.style.display = 'none';

    } else if (interruptor) {
        for (let i = 0; i < elementosACambiar2.length; i++) {
            elementosACambiar2[i].style.display = 'block';
        }
        elementosACambiar2.style.display = 'none';
        elementosACambiar3.style.display = 'none';
        elementosACambiar4.style.display = 'none';
    }


    for (let i = 0; i < elementosACambiar3.length; i++) {
        elementosACambiar3[i].style.display = 'none';
    }
    for (let i = 0; i < elementosACambiar4.length; i++) {
        elementosACambiar4[i].style.display = 'none';
    }
}*/

/*
function abrirCerrar1() {
    let bloque1 = document.querySelectorAll(".bloque1");
    let bloque2 = document.querySelectorAll(".bloque2");
    let bloque3 = document.querySelectorAll(".bloque3");
    let bloque4 = document.querySelectorAll(".bloque4");

    // Itera a través de la colección y oculta los elementos
    for (let i = 0; i < bloque1.length; i++) {
        bloque1[i].style.display = 'block';
        bloque2.style.display = 'none';
        bloque3.stye.display = 'none';
        bloque4.stye.display = 'none';
    }

}*/



/***
 * 
 * En este código, window.getComputedStyle(bloque2).display se utiliza para obtener el valor computado del estilo display del elemento "bloque2", lo que te permitirá verificar si está oculto correctamente, independientemente de cómo se haya definido el estilo.
 */
function cerrarAbrir1() {
    let bloque2 = document.querySelectorAll(".bloque2")[0];

    if (window.getComputedStyle(bloque2).display === 'none') {
        let bloque1 = document.querySelectorAll(".bloque1")[0];
        let bloque2 = document.querySelectorAll(".bloque2")[0];
        let bloque3 = document.querySelectorAll(".bloque3")[0];
        let bloque4 = document.querySelectorAll(".bloque4")[0];
        bloque1.style.display = 'block';
        bloque2.style.display = 'none';
        bloque3.style.display = 'none';
        bloque4.style.display = 'none';
    }
}

function cerrarAbrir2() {
    let bloque1 = document.querySelectorAll(".bloque1")[0];

    if (window.getComputedStyle(bloque1).display === 'none') {
        let bloque1 = document.querySelectorAll(".bloque1")[0];
        let bloque2 = document.querySelectorAll(".bloque2")[0];
        let bloque3 = document.querySelectorAll(".bloque3")[0];
        let bloque4 = document.querySelectorAll(".bloque4")[0];
        bloque2.style.display = 'block';
        bloque1.style.display = 'none';
        bloque3.style.display = 'none';
        bloque4.style.display = 'none';
    }
}

function cerrarAbrir3() {
    let bloque3 = document.querySelectorAll(".bloque3")[0];

    if (window.getComputedStyle(bloque3).display === 'none') {
        let bloque1 = document.querySelectorAll(".bloque1")[0];
        let bloque2 = document.querySelectorAll(".bloque2")[0];
        let bloque3 = document.querySelectorAll(".bloque3")[0];
        let bloque4 = document.querySelectorAll(".bloque4")[0];
        bloque3.style.display = 'block';
        bloque2.style.display = 'none';
        bloque1.style.display = 'none';
        bloque4.style.display = 'none';
    }
}











