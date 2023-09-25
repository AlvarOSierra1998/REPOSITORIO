<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //VALOR 
        $Var = 1;
        $Var2 = 2;
        $Var1 =  $Var2;//Var 1 pasa  a ser 2
        echo $Var1; //2
        //
        echo ",";
        $Var2 = 3; //3
        echo $Var1; //2
        

        //REFERENCIA
        $Var = 1;
        $Var2 = 2;
        $Var1 = &$Var2;// enlaza todo lo que le pasa  a var1, lo cambia a var2
        echo $Var1; //valor de var2
        echo ",";
        $Var2 = 3;
        echo ",";
        //echo &$Var1; //Te dice lo que tiene var 1

        //Asignaciones
        $local = "local";
        
        //Globales
        $VarHola = "hola";
        function hola(){
        global $VarHola;

        }

        $VarEstatica = "estatico";
        function estatico(){
            static $VarEstatica;
        }

        //COSTANTES
        define("CONST_1", 1);
            echo CONST_1;
        define("CONST_2", 2);
            echo CONST_2;
        define("CONST_3", 3);
            echo CONST_3;
            
        //datos
             //strval = "string"; //convierte a texto cualquier variable q se pase x parametro    
             //intval = "cambio a numero"; //convierte a numero cualquier variable q se pase x parametro    
             //floatval = "cambio a numero float"; //convierte a numero cualquier variable float
        //ejemplos
            $Var = "0";
            $Var2 = "2";
            $Var =  intval($Var);
            $Var2 =  intval($Var2);
            $Var3 = $Var + $Var2; //los suma y lo almacena en var3
            echo $Var3; //3 
        //Cambio de nuemro a String  
                //saca el entero y el string 10 y "10"
            $VarNumero = 10;
            echo $VarNumero; //10
            $VarString = strval($VarNumero);
            echo ""; //"10"
            echo $VarString; //"10" 
            echo gettype($VarString)        



        
    ?>
    
</body>
</html>

