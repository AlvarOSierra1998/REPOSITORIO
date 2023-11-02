<?php
    if(isset($_GET["boton_direc"]) && isset($_GET["login_ok"])){
        echo getcwd();
        
    }
    if(isset($_GET["boton_fecha"]) && isset($_GET["login_ok"])){
        echo date('l j F');
    }
    if(isset($_GET["boton_hora"]) && isset($_GET["login_ok"])){
        echo date('h:i:s A');
    }
    if(isset($_GET["boton_nombre"]) && isset($_GET["login_ok"])){
        $nombreArchivo = glob('*.php');
        print_r($nombreArchivo);
    }
    if(isset($_GET["boton_archivo"]) && isset($_GET["login_ok"])){
        $comen = $_GET["comentario"];
        $archivo = fopen("hola.txt", "w+");
        fwrite($archivo, $comen);
        $completo = file_get_contents("hola.txt");
        echo "<p>el arxivo es</p>: <br/>" . $completo . "</p>";
        fclose($archivo);
        
    }
    
    if(!isset($_GET["login_ok"])){
        $usuario = $_POST["user"];
        $pass = $_POST["password"];
        $array = array("user" => "admin","pass" => "1234");
        if($array["user"] == $usuario && $array["pass"] == $pass){     
?>
    <!--OPCIONES-->
    <form action="index.php" method="GET">
        <fieldset>
            <legend>Elige una opción</legend>
            <input type="hidden" name="login_ok">
            <input type="submit" name="boton_direc" value="Directorio">
            <input type="submit" name="boton_fecha" value="fecha">
            <input type="submit" name="boton_hora" value="hora">
            <input type="submit" name="boton_nombre" value="nombre del archivo">
            <input type="texto" name="comentario" >
            <input type="submit" name="boton_archivo" value="escribir">
        </fieldset>
    </form>
<?php
    }else{
    echo "ta mal";
}
}
?>