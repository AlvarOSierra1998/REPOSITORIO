var nombre = prompt("Hola!, Introduzca su nombre, por favor ");
        alert("Bienvenido a mi web " + nombre);
        function hola(){
            alert("Hola, Bienvenido a la dungeon donde habra 100 cauros que te van a aniquilar en 0,"); 
        }
        function adios(){
            alert("adios, ta luego lucas");
        }
        function calculadora(){
            var numero1 = parseInt(prompt("Introduzca un numero" ));
            var numero2 = parseInt(prompt("Introduzca un segundo numero"));
            console.log("1.Sumar 2.Restar 3.Multiplicar 4.Division 5.Nuevos numeros 6.Salir ");
            var salir = true;
            while  (salir){
                
                var operaciones = parseInt(prompt("Introduzca una operacion"));
                switch(operaciones){
                    case 1:
                        if(operaciones == 1){
                            console.log("la suma de los dos numeros es: " + (numero1 + numero2));
                        }else{
                            console.log("error");
                        }
                        break;
                    case 2:
                        if(operaciones == 2){
                            console.log("la resta de los dos numeros es: "+ (numero1 - numero2));
                        }else{
                            console.log("error");
                        }
                        break;
                    case 3:
                        if(operaciones == 3){
                            console.log("la multiplicacion de los dos numeros es: " + (numero1 * numero2));
                        }else{
                            console.log("error");
                        }
                        break;
                    case 4:
                            if(operaciones == 4){
                                console.log("la division de los dos numeros es: "+ (numero1 / numero2));
                            }else{
                                console.log("error");
                            }
                            break;
                    case 5:
                        numero1 = parseInt(prompt("Introduzca un numero" ));
                        numero2 = parseInt(prompt("Introduzca un segundo numero"));
                            break;
                    case 6:
                        salir = false;
                        break;    
                            default:
            }
            }
}