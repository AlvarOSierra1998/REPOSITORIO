/*function mostrarOcultarDiv() {
    var divParaMostrarOcultar = document.getElementById("miDiv");

    if (divParaMostrarOcultar.style.display === "flex") {
        divParaMostrarOcultar.style.display = "none";
        divParaMostrarOcultar.style.opacity = "0";
    } else {
        divParaMostrarOcultar.style.display = "flex";
        divParaMostrarOcultar.style.opacity = "1";
    }
}*/

//registro
function mostrar() {
    var mostrar = document.getElementsByClassName("contenedor");
    /*var blur = document.getElementById("blur");*/
    for (var i = 0; i < mostrar.length; i++) {
        mostrar[i].style.display = "flex";
    }

    ocultar2();
}

function ocultar() {
    var oculto = document.getElementsByClassName("contenedor");
    for (var i = 0; i < oculto.length; i++) {
        oculto[i].style.display = "none";
    }
}
//login
function mostrar2() {
    var mostrar = document.getElementsByClassName("contenedor-login");
    for (var i = 0; i < mostrar.length; i++) {
        mostrar[i].style.display = "flex";
    }
    ocultar();
}

function ocultar2() {
    var oculto = document.getElementsByClassName("contenedor-login");
    for (var i = 0; i < oculto.length; i++) {
        oculto[i].style.display = "none";
    }
}

function cerraranuncio(){
    var ocultar = document.getElementById("cerrar");
    ocultar.style.display = "none";
}

function cerrarRegistro(){
    var ocultar = document.getElementById("cerrarRegistro");
    ocultar.style.display = "none";
}