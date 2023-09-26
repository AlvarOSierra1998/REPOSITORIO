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
// 1º/2 b)  Variable de tipo boolean con valor “true”.

        $VarBool = true;
        echo ($VarBool);

        echo "<br>";

        $VarFloat = 3.14;

        $VarArrayMapa = array("Valor1" => 1, "Valor2" => 2, "Valor3" => 3);
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

    //REVSISAR
        echo str_replace(" ","", $VarConcatenacion);
        echo "<br>";

        echo "El operador “+” sirve para sumar el valor de variables. Con la “/”podemos
        dividir valores entre variables. El símbolo del dólar “\$” indica que estamos
        utilizando variables pero no lo usaremos en las constantes o globales.";

        $VarTexto = "El operador “+” sirve para sumar el valor de variables. Con la “/”podemos
        dividir valores entre variables. El símbolo del dólar “\$” indica que estamos
        utilizando variables pero no lo usaremos en las constantes o globales.";

        echo "<br>";
        echo strlen($VarTexto);
        echo "<br>";
    //quitar vocales
        $VarHello = "Hello World";
        $VarHello = str_replace("e","",$VarHello);
        $VarHello = str_replace("o","",$VarHello);
        echo $VarHello;
        echo "<br>";
    //La comprobacion es el 1 no contenido
        $VarNoContent= "";
        echo empty($VarNoContent);
        echo "<br>";
    //Lo convierte en 0
        echo intval($VarHello);
        echo "<br>";

    //calculo
    echo sqrt(144);
    echo pow(2,8);
    echo "<br>";
    echo 100/6;
    echo "<br>";


       
        


        


    ?>
    
</body>
</html>