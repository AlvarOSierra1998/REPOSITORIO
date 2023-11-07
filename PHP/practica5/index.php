<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
<?php
session_start();
if (isset($_SESSION["user"])) {
    if($_SESSION["rol"]=="admin"){
?>
    <!--OPCIONES-->
    <form action="index.php" method="GET">
        <fieldset>
            <legend>Elige una opción ADMIN</legend>
            <input type="hidden" name="login_ok">
            <input type="submit" name="boton_direc" value="Directorio">
            <input type="submit" name="boton_fecha" value="fecha">
            <input type="submit" name="boton_hora" value="hora">
            <input type="submit" name="boton_nombre" value="nombre del archivo">
            <input type="texto" name="comentario">
            <input type="submit" name="boton_archivo" value="escribir">
        </fieldset>
    </form>
    <form action="logout.php" method="post">
        <input type="submit" value="logout">
    </form>

<?php
    //ADMIN
    if (isset($_GET["boton_direc"]) && isset($_GET["login_ok"])) {
        echo getcwd();
    }
    if (isset($_GET["boton_fecha"]) && isset($_GET["login_ok"])) {
        echo date('l j F');
    }
    if (isset($_GET["boton_hora"]) && isset($_GET["login_ok"])) {
        echo date('h:i:s A');
    }
    if (isset($_GET["boton_nombre"]) && isset($_GET["login_ok"])) {
        $nombreArchivo = glob('*.php');
        print_r($nombreArchivo);
    }
    if (isset($_GET["boton_archivo"]) && isset($_GET["login_ok"])) {
        $comen = $_GET["comentario"];
        $archivo = fopen("hola.txt", "w+");
        fwrite($archivo, $comen);
        $completo = file_get_contents("hola.txt");
        echo "<p>el arxivo es</p>: <br/>" . $completo . "</p>";
        fclose($archivo);
    }
?>


<?php
    

    //CLIENTE
} elseif ($_SESSION["rol"]=="usuario") {
    if (isset($_GET["boton_direc"]) && isset($_GET["login_ok"])) {
        echo getcwd();
    }
    if (isset($_GET["boton_nombre"]) && isset($_GET["login_ok"])) {
        $nombreArchivo = glob('*.php');
        print_r($nombreArchivo);
    }


?>

<form action="index.php" method="GET">
        <fieldset>
            <legend>Elige una opción CLIENTE</legend>
            <input type="hidden" name="login_ok">
            <input type="submit" name="boton_direc" value="Directorio">
            <input type="submit" name="boton_nombre" value="nombre del archivo">
        </fieldset>
    </form>
    <form action="logout.php" method="post">
        <input type="submit" value="logout">
    </form>

    <?php
    }}
    ?>

</body>

</html>