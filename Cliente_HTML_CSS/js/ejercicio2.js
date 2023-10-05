/*CAMBIO DE ANCHO Y ALTO DE LA TABLA*/

function valores() {
    var boton1 = document.getElementById("boton");
    var tabla = document.getElementById("tabla");
    alert(boton1.innerHTML = "Los valores de anchura y altura de la tabla son por defecto 300px x 300px");

    var alto = parseInt(prompt("pon el nuevo valor de tabla en el alto"));
    alert("el nuevo alto es" + alto);
    tabla.style.height = parseInt(alto) + "px";
    var ancho = parseInt(prompt("pon el nuevo valor de tabla en el ancho"));
    alert("el nuevo ancho es" + ancho);
    tabla.style.width = parseInt(ancho) + "px";
}



function cambiarBorde() {
    var nuevoBorde = document.getElementById("nuevoBorde").value;
    var tabla = document.querySelector("table");
    tabla.style.border = nuevoBorde + "px solid black";
    document.getElementById("borderWidth").textContent = nuevoBorde + "px";
}

function alineacion(){
    var alineacion = document.getElementById("alineacion");
    alineacion.style.position=  "float: left";

}
