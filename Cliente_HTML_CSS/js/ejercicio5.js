var interruptor = true;

function cambiarColor(){
    let color = document.getElementById("color")
        if(interruptor){
            color.className="dos";
        }else{
            color.className="uno";
        }
        interruptor =! interruptor; 
    
}