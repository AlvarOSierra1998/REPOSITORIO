function fotos(){
    var fotos = document.querySelectorAll(".contenedor");
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "block"
        fotos[i].style.width = "60%";
        fotos[i].style.marginLeft = "20%";
    }  
    
}