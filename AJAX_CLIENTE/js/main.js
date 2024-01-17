function cargarContenido(dato) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.php?dato=' + dato, true);
    xhr.send();
    // Realiza la solicitud GET a datos.php con el dato específico
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Actualiza la sección con el contenido recibido
                document.querySelector('.container-contenido-dinamico').innerHTML = xhr.responseText;
            } else {
                contenido.innerHTML = "Error : " + xhr.status;
                alert("el codigo es: " + "" +  xhr.readyState)
                alert("El codigo es : " + xhr.status);
            }
        } else {
            contenido.innerHTML = "Cargando...";
            
        }
    } 
}

//JQ

/*probar a poner un loadin con un document get element byID y pasar la variable en el cargando, ese loading va a estar oculto y se mostrara al hacer click*/




/****
 * 
 * 
 * 
function XMLHttpRequestFun(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.php?dato=' + dato, true);
    xhr.send();
    cargarContenido();
}




function cargarContenido(dato) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 ){
        }
        if(xhr.status == 200) {
            // Actualiza la sección con el contenido recibido
            document.querySelector('.container-contenido-dinamico').innerHTML = xhr.responseText;
            alert("El codigo es : " + xhr.responseText);
        }else{
            alert("el codigo es: " + xhr.responseText + "el estado es " + xhr.status);
        }
    };
    XMLHttpRequestFun();

}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */