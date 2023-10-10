<?php
    $precio = $_POST["price"];


    if ($precio <= 50){
        $precio += 3.95;
    }else if ($precio > 50 && $precio < 75){
        $precio += 3.95;
    }else if ($precio > 75 && $precio < 100){
        $precio
    }
?>