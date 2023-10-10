var interruptor = true;

function cambiarColor2() {
    let color = document.getElementById("color2")
    
    if (interruptor) {
        color.style.backgroundColor = "green";

    } else {
        color.style.backgroundColor = "red";
    }
    interruptor = !interruptor;
}