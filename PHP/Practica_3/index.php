<?php
    $precio = $_POST["price"];

    if ($precio <= 50){
        $precio += 2.95;
    }else if ($precio > 50 && $precio <= 75){
        $precio += 3.95;
    }else if ($precio > 75 && $precio < 100){
        $precio += 1.95;
    }else{
        echo "envio gratis";
    }


    /**
     * Ejercicio de arriba pero con switch
     * 
     */
    switch(true){
        case $precio < 50:
            $gastosDeEnvio = 2.95;   
            echo "gastos de envio = 2.95";
            break;
        case $precio > 50 && $precio <= 75:
            $gastosDeEnvio = 3.95; 
            echo "gastos de envio = 3.95";
            break;
        case $precio > 75 && $precio < 100:
            $gastosDeEnvio = 1.95;
            echo "gastos de envio = 1.95"; 
            break;
        default:
        $gastosDeEnvio = 0;           
    }

    /**
     * Ejercicio 3
     */
    echo "<br>";

    $num1 = $_POST["numero1"];
    $num2 = $_POST["numero2"];
    $num3 = $_POST["numero3"];
    $num4 = $_POST["numero4"];
    $num5 = $_POST["numero5"];
    $mayor = null;
    $numeros = array($num1,$num2,$num3,$num4,$num5);

    for($i = 0; $i <count($numeros); $i++) {
        if($numeros[$i] > $mayor){
            $mayor = $numeros[$i];
        }
}
echo "el numero mas grande es ". $mayor . "<br>";

/**
 * 
 * ejercicio 4
 */

$Matriz_num = array(
    array(3,1),
    array(2,0)
);

    foreach($Matriz_num as $fila){
        echo "| ";
        foreach($fila as $value){
            echo $value." ";
        }
        echo "| <br>";
    }

    /**
     * ejercicio 5
     *  */  
    $Matriz1 = array(
        array(1,0),
        array(0,1)
    );
    $Matriz2 = array(
        array(0,1),
        array(1,0)
    );

    echo "<br>";
    $resultado=[];
    for($i = 0; $i < count($Matriz1); $i++) {
        for($j = 0; $j < count($Matriz2); $j++){
        $resultado[$i][$j] = $Matriz1[$i][$j] + $Matriz2[$i][$j];
        }
    }
    //imprime la matriz resultante
    foreach($resultado as $fila){
        echo "| ";
        foreach($fila as $value){
            echo $value." ";
        }
        echo "| <br>";
    }
?>