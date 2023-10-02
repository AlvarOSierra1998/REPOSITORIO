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


function mostrar() {
    var mostrar = document.getElementsByClassName("contenedor");
     for (var i = 0; i < mostrar.length; i++) {
        mostrar[i].style.display = "flex";
    }
}

function ocultar() {
    var oculto = document.getElementsByClassName("contenedor");
     for (var i = 0; i < oculto.length; i++) {
        oculto[i].style.display = "none";
    }
}

function mostrar2() {
    var mostrar = document.getElementsByClassName("contenedor-login");
     for (var i = 0; i < mostrar.length; i++) {
        mostrar[i].style.display = "flex";
    }
}

function ocultar2() {
    var oculto = document.getElementsByClassName("contenedor-login");
     for (var i = 0; i < oculto.length; i++) {
        oculto[i].style.display = "none";
    }
}