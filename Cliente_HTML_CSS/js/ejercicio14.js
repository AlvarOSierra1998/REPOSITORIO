
function cerrarAbrir(bloqueAbre) {
    let bloque1 = document.querySelector(".bloque1");
    let bloque2 = document.querySelector(".bloque2");
    let bloque3 = document.querySelector(".bloque3");

    if(bloqueAbre === 'bloque1'){
        bloque1.style.display = 'block';
        bloque2.style.display = 'none';
        bloque3.style.display = 'none';
    }else if(bloqueAbre === 'bloque2'){
        bloque1.style.display = 'none';
        bloque2.style.display = 'block';
        bloque3.style.display = 'none';

    }else if(bloqueAbre === 'bloque3'){
        bloque1.style.display = 'none';
        bloque2.style.display = 'none';
        bloque3.style.display = 'block';
    }
}











