function sumar(){
    let suma = document.getElementById("nuevoNumero");
    let cogerSuma = parseInt(suma.textContent);
    cogerSuma++;
    suma.textContent = cogerSuma;

}
function restar(){
    let restar = document.getElementById("nuevoNumero");
    let cogerResta = parseInt(restar.textContent);
    cogerResta--;
    restar.textContent = cogerResta;
}