<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    /*  1º a)  Variable de tipo String con valor “Hola” concatenada a un espacio y
        concatenada a una variable de tipo String con valor “Mundo”.
        Guarda la concatenación en una nueva variable.   
    */
        $VarString = "Hola";
        $VarString2 = "Mundo";
        $VarConcatenacion = $VarString . " ". $VarString2;
        echo $VarConcatenacion;
        echo "<br>";

        echo "<br>";
    // 1º/2 b)  Variable de tipo boolean con valor “true”.
        $VarBool = true;
        echo ($VarBool);
        echo "<br>";
        echo "<br>";

        $VarFloat = 3.14;
        
        echo $VarFloat;

        echo "<br>";
        $VarArrayMapa = array("Valor1" => 1, "Valor2" => 2, "Valor3" => 3);
        echo "<br>";
        echo print_r($VarArrayMapa);
        echo "<br>";

        /**
         * En el Xampp al poner false no nos aparece nada, 
         * ya que el valor esta vacio osea es null 
         * y por lo tanto no se muestra
         * 
         */
        $VarBool = false;
        echo ($VarBool);
        echo "<br>";

         //Quita el espacio en blanco con a la concatenación
        echo str_replace(" ","", $VarConcatenacion);
        echo "<br>";
        echo "<br>";
        //Para que muestre el simbolo dolar ponemos la barra \$
        echo "El operador “+” sirve para sumar el valor de variables. Con la “/”podemos
        dividir valores entre variables. El símbolo del dólar “\$” indica que estamos
        utilizando variables pero no lo usaremos en las constantes o globales.";
        echo "<br>";
        $VarTexto = "El operador “+” sirve para sumar el valor de variables. Con la “/”podemos
        dividir valores entre variables. El símbolo del dólar “\$” indica que estamos
        utilizando variables pero no lo usaremos en las constantes o globales.";
        
        //longitud de la cadena
        echo "<br>";
        echo strlen($VarTexto);
        echo "<br>";
    //quitar vocales
        echo "<br>";
        $VarHello = "Hello World";
        $VarHello = str_replace("e","",$VarHello);
        $VarHello = str_replace("o","",$VarHello);
        echo $VarHello;
        echo "<br>";
        echo "<br>";
    //La comprobacion es el 1 no contenido
        $VarNoContent= "";
        echo empty($VarNoContent);
        echo "<br>";
    //Lo convierte en 0
        echo "<br>";
        echo intval($VarHello);
        echo "<br>";
        echo "<br>";

    //calculo
    echo " * Ejercicio 9:";
    echo "<br>";
    echo "<br>";
    echo "la raíz cuadrada de 144 es: ";
    echo sqrt(144);
    echo "<br>";
    echo "<br>";
    echo "la potencia de 2^8 es: ";
    echo pow(2,8);
    echo "<br>";
    echo "<br>";
    echo "el resto de la división de 100 entre 6 es: ";
    echo 100%6;
    
    //funcion  que calcula el maximo comun divisor
echo "<br>";
echo "<br>";
    function obtener_mcd($a, $b) {
        if ($b ==0){
            return $a;
        }else{
            return obtener_mcd($b, $a % $b);
        }
    }
echo ("El mcd de 3 y 6 es: \n" . obtener_mcd(3,6))


       
        


        


    ?>
    
</body>
</html>