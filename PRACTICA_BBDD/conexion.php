<?php
    $serverName = "localhost";
    $baseDatos = "practicabbdd9";
    $userName = "root";
    $password = "";

    //crea la conexion

    $conexion = mysqli_connect($serverName, $userName, $password) or die("Couldn't connect to server");
    mysqli_select_db($conexion, $baseDatos);
    

?>

<?php
/*
try {
    $pdo = new PDO("mysql:host=localhost;dbname=practicabbdd9", "root", "");

    // Preparar y ejecutar una consulta
    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $id = 1;
    $stmt->execute();

    // Obtener los resultados
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Hacer algo con los resultados
    print_r($resultados);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    
}*/
?>
