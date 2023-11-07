<?php
if (!isset($_GET["login_ok"])) {
    $usuario = $_POST["user"];
    $pass = $_POST["password"];
    session_start();
    if ($usuario == "admin" && $pass == "1234") {
        $_SESSION["user"]=$usuario;
        $_SESSION["rol"]="admin";
        header("Location:index.php");}

    elseif ($usuario == "cliente1" && $pass == "5678"){
        $_SESSION["user"]=$usuario;
        $_SESSION["rol"]="usuario";
        header("Location:index.php");
    }
}else {
        header("location:index.html");
    }

?>

