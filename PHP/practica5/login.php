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

<!------DIFERENCIA ENTRE COOKIE Y SESION


La principal diferencia entre cookie y sesion es que una cookie al ser creada se alamacena en nuestro equipo locla como un fichero de texto
que permanece oculto y al cual el navegador accede cuando entramos en las webs en los que se han creado dichas cookies.
Y una sesion almacena los datos en un servidor.




----->

