<?php
require_once 'conexion.php';
session_start();

if (isset($_POST['login'])) {

    $user = $_POST['jugador'];
    $password = $_POST['password'];
    // Verifica las credenciales en la base de datos
    $query = "SELECT * FROM usuario WHERE nombre = ? AND password = ?";
    $stmt = $conexion->prepare($query);
    $stmt->bind_param("ss", $user, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    

    if ($result->num_rows > 0) {
        // Inicio de sesión exitoso
        $_SESSION['username'] = $user;
        $_SESSION['session_id']= $user_id;
        header('Location:juego.php');
        exit();
    } else {
        // Credenciales incorrectas
        echo "Usuario o contraseña incorrectos";
    }

    $stmt->close();
    $conexion->close();
} else {
    header("location: index.html");
}
