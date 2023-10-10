<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <?php

        //SENTENCIAS
        //expresiones de asignacion
            ++$var //primero suma y luego comprueba la variable
        
        
        /*switch($var){
            case 1:
                //accion
            break;    
        }*/

        for($i = 0; $i < 10; $i++){

        }
    while($condicion){

        }

        foreach ($array as $valor){
            //acciones
        }

        $animales = array('mamiferos' => "ornitorrinco", 'oviparo' => "serpiente", 'ave'  => "tucan")
        foreach($animales as $tipo => $especie){ 
            echo $tipo.":".$especie."<br>";
        }
        unset($valor) //encargado de eliminar el valro almacenado en la variable, es dwcir la ultima pos del array
        unset($valor[posicion])
        sort()//de manor a mayos
        rsort()//de mayor a manor


        $Matriz_num = array(
            array(1,2,3,4),
            array(5,6,7,8),
            array(9, 10,11, 12);
        );
        echo $Matriz_num[2][1]; //devuelve el 10

        $matriz_clave = array(
            'col0' => array(1,2,3,4),
            'col1' => array(5,6,7,8),
        );
        echo $matriz_clave [col3][1];

        //Formularios
        /**
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         */

        ?>
</body>
</html>