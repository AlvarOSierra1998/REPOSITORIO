<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>


    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kalnia:wght@300&family=Noto+Serif+JP:wght@200&display=swap');

        body {
            color: wheat;
            font-family: "lato", sans-serif;
            background-image: url("https://preview.redd.it/pl7841h8ntr51.png?width=1920&format=png&auto=webp&s=a160ceab52c498897cfd7fac11f0efa3060b93b5");
            background-repeat: repeat;

        }

        h1 {
            font-size: 1em;
            text-align: center;
            margin: auto;
            color: orange;

        }


        form {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 5%;



        }

        table,
        td {
            width: 100%;
            border: 1px solid white;
            border-radius: 10px;

        }

        .asociado-container {
            font-size: 1.10rem;
            display: inline-flex;
            align-items: flex-start;
            justify-content: flex-start;
            width: 20%;


        }

        .asociado-container2 {
            font-size: 1.10rem;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 30%;
            position: absolute;
            top: 50%;
            left: 35%;
        }




        .tag-asociado {
            color: orange;
            font-family: 'Kalnia', serif;
            font-family: 'Noto Serif JP', serif;
            font-size: 1.20em;
            display: flex;
            margin-bottom: 14%;

        }

        .titulo-total {
            font-family: 'Kalnia', serif;
            font-family: 'Noto Serif JP', serif;
            font-size: 1.60rem;
            color: red;
            text-align: center;
            font-weight: bolder;
            width: 50%;
            margin: auto;
            position: absolute;
            top: 45%;
            left: 25%;
        }

        .titulo-asociado {
            font-family: 'Kalnia', serif;
            font-family: 'Noto Serif JP', serif;
            font-size: 1.40rem;
            color: red;
            text-align: center;
            font-weight: bolder;
            width: 20%;
            margin: auto 1%;
            border-radius: 20px 20px 20px 20px;
            text-shadow: 0 0 30px #fff;



        }

        .boton1,
        .boton2 {
            background: none;
            outline: none;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 12%;
            left: 22%;
        }

        .dice1 {
            width: 50%;
            margin: auto 110%;
            height: auto;

        }

        .dice2 {
            width: 100%;
            margin: auto 110%;
            height: auto;
        }

        .fadebalck {
            border-image: fill 0 linear-gradient(#0003, #000);
            height: 500px;
        }

        section>form {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            margin: auto;
            flex-direction: column;
            margin: 2%;
        }

        .section-op {
            margin: -13% 1% auto 32%;
            display: flex;
        }
    </style>

</head>

<body>
    <?php
    session_start(); // Inicia la sesión
    require_once 'conexion.php'; // Asegúrate de tener el archivo de conexión incluido

    // Verifica si el usuario está autenticado
    if (isset($_SESSION['username'])) {
        $username = $_SESSION['username'];

        // Consulta SQL para obtener el user_id del usuario actual
        $consulta_user_id = "SELECT id FROM usuario WHERE nombre = ?";
        $stmt_user_id = $conexion->prepare($consulta_user_id);
        $stmt_user_id->bind_param("s", $username);
        $stmt_user_id->execute();
        $result_user_id = $stmt_user_id->get_result();

        // Verificar si hay resultados
        if ($result_user_id->num_rows > 0) {
            $row_user_id = $result_user_id->fetch_assoc();
            $user_id = $row_user_id['id'];

            // Consulta SQL para obtener la información de hechizos asociados al usuario
            $sql = "SELECT hechizos.id, hechizos.nombre, hechizos.tipo, hechizos.utilidad
        FROM hechizos
        INNER JOIN user_spells ON user_spells.spell_id = hechizos.id
        WHERE user_spells.user_id = ?";

            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("i", $user_id);
            $stmt->execute();
            $result = $stmt->get_result();

            // Verificar si hay resultados
            if ($result->num_rows > 0) {
                echo "<p class= titulo-asociado>
                Estos son los hechizos base con los que el usuario  $user_id comienza la partida, selecciona uno de los dados para realizar una tirada aleatoria de estos o de todos los disponibles <br>
                </p>";

                // Mostrar la información de cada hechizo
                while ($row = $result->fetch_assoc()) {
                    echo
                    "<table class=asociado-container>" .
                        "<tr>
                        <th class = tag-asociado>ID:
                        </th> 
                        <td>" . $row['id'] . "</td>      
                    </tr>
                        <tr>
                            <th class = tag-asociado>Nombre:
                            </th> 
                            <td>" . $row['nombre'] . "</td>      
                        </tr>
                            <br>
                        <tr>
                            <th class = tag-asociado> Tipo:</th>
                            <td> " . $row['tipo'] . "</td>
                        </tr>


                    <tr>
                            <th class = tag-asociado> Utilidad:</th>
                            <td> " . $row['utilidad'] . "</td>
                    </tr>
                    </table>
                            <br>";
                }
            } else {
                echo "El usuario no tiene hechizos asociados.";
            }

            $stmt->close();
            $stmt_user_id->close();
        } else {
            echo "No se encontró el usuario en la base de datos.";
        }

        echo "<br>"
    ?>

        <div class="section-op">
            <section>
                <form method="post" action="juego.php">
                    <button class="boton1" type="submit" name="randomAsociado">
                        <img class="dice1" src="https://images.vexels.com/media/users/3/318589/isolated/preview/331a8ba0fd9f33bfe5bd770521459e1b-dice-for-role-playing-games.png" alt="dado1">
                    </button>
                </form>

                <form method="post" action="juego.php">
                    <button class="boton2" type="submit" name="random">
                        <img class="dice2" src="https://images.vexels.com/media/users/3/318591/isolated/lists/6a319f47e4f03f41653a24944de699cf-dados-para-juegos-de-mesa-de-rol.png" alt="">

                    </button>
                </form>
            </section>


            <section class="borrar">
                <h1>Borrar Hechizo</h1>
                <form method="post" action="juego.php">
                    <!-- Campo de entrada para el ID del hechizo -->
                    <label for="hechizoId">ID del Hechizo a Borrar:</label>
                    <input type="text" name="hechizoId" required>

                    <!-- Botón para borrar -->
                    <button type="submit" name="borrarHechizo">Borrar Hechizo</button>
                </form>
            </section>

            <section class="insertar">
                <h1>Insertar Nuevo Hechizo Asociado</h1>

                <form method="post" action="juego.php">
                    <!-- Campo oculto para el ID del usuario al que se asociará el hechizo -->
                    <label for="usuarioID">Indica tu id de usuario</label>
                    <input type="text" name="usuarioId">

                    <!-- Campo de entrada para el ID del hechizo a asociar -->
                    <label for="hechizoId">ID del Hechizo a Asociar:</label>
                    <input type="text" name="hechizoId" required>

                    <!-- Botón para insertar -->
                    <button type="submit" name="insertarHechizoAsociado">Insertar Hechizo Asociado</button>
                </form>

            </section>


            <section class="insertar-to">
                <h1>Insertar Nuevo Hechizo</h1>

                <form method="post" action="juego.php">
                    <!-- Campo de entrada para el nombre del hechizo -->
                    <label for="nombre">Nombre del Hechizo:</label>
                    <input type="text" name="nombre" required>

                    <!-- Campo de entrada para el tipo del hechizo -->
                    <label for="tipo">Tipo del Hechizo:</label>
                    <input type="text" name="tipo" required>

                    <!-- Campo de entrada para la utilidad del hechizo -->
                    <label for="utilidad">Utilidad del Hechizo:</label>
                    <input type="text" name="utilidad" required>

                    <!-- Botón para insertar -->
                    <button type="submit" name="insertarHechizo">Insertar Hechizo</button>
                </form>
            </section>

        </div>

        <?php
        require_once 'conexion.php';
        if (isset($_POST['randomAsociado'])) {
            //ASOCIADOS
            $sql = "SELECT hechizos.nombre, hechizos.tipo, hechizos.utilidad
        FROM hechizos
        INNER JOIN user_spells ON user_spells.spell_id = hechizos.id
        WHERE user_spells.user_id = ?
        ORDER BY RAND()
        LIMIT 1";

            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("i", $user_id);
            $stmt->execute();
            $result = $stmt->get_result();

            // Resto del código...

            // Verificar si hay resultados
            if ($result->num_rows > 0) {
                echo "<p class= titulo-total>
            
            El hechizo obtenido de la tirada asociativa del usuario  $user_id es:<br>
            </p>";

                // Almacena los hechizos en un array
                $hechizos = [];
                while ($row = $result->fetch_assoc()) {
                    $hechizos[] = $row;
                }

                // Baraja aleatoriamente los hechizos
                shuffle($hechizos);

                // Mostrar la información de cada hechizo
                foreach ($hechizos as $hechizo) {
                    echo
                    "<table class=asociado-container2>" .
                        ">
                        <tr>
                            <th class = tag-asociado>Nombre:
                            </th> 
                            <td>" . $hechizo['nombre'] . "</td>      
                        </tr>
                            <br>
                        <tr>
                            <th class = tag-asociado> Tipo:</th>
                            <td> " . $hechizo['tipo'] . "</td>
                        </tr>


                    <tr>
                            <th class = tag-asociado> Utilidad:</th>
                            <td> " . $hechizo['utilidad'] . "</td>
                    </tr>
                    </table>
                            <br>  ";
                }
            } else {
                echo "El usuario no tiene hechizos asociados.";
            }
        }
        // tabla...
        // TODOSSSSSSSSSSSSSSSSSSSSSSSSSSSSS los hechizos
        // Consulta SQL para obtener todos los hechizos de la tabla
        if (isset($_POST['random'])) {

            $sql = "SELECT hechizos.nombre, hechizos.tipo, hechizos.utilidad
        FROM hechizos
        ORDER BY RAND()
        LIMIT 1";

            $stmt = $conexion->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();

            // Resto del código...

            // Verificar si hay resultados
            if ($result->num_rows > 0) {
                echo "<p class= titulo-total>Hechizos aleatorios de toda la tabla:</p>";

                // Almacena los hechizos en un array
                $hechizos = [];
                while ($row = $result->fetch_assoc()) {
                    $hechizos[] = $row;
                }

                // Baraja aleatoriamente los hechizos
                shuffle($hechizos);

                // Mostrar la información de cada hechizo
                foreach ($hechizos as $hechizo) {
                    echo
                    "<table class=asociado-container2>" .
                        "<tr>
                            <th class = tag-asociado>Nombre:
                            </th> 
                            <td>" . $hechizo['nombre'] . "</td>      
                        </tr>
                            <br>
                        <tr>
                            <th class = tag-asociado> Tipo:</th>
                            <td> " . $hechizo['tipo'] . "</td>
                        </tr>


                    <tr>
                            <th class = tag-asociado> Utilidad:</th>
                            <td> " . $hechizo['utilidad'] . "</td>
                    </tr>
                    </table>
                            <br>  ";
                }
            } else {
                echo "No hay hechizos en la tabla.";
            }
        }

        ?>

        <!---INSERTAR (ASOCIADOS)--->
        <?php
        // Asegúrate de tener la conexión a la base de datos activa
        require_once 'conexion.php';

        // Verificar si se envió el formulario (cuando se presiona el botón de insertar)
        if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['insertarHechizoAsociado'])) {
            // Obtener el ID del usuario al que se asociará el hechizo (puedes obtenerlo desde la sesión o el formulario)
            $usuarioId = $_POST['usuarioId'];

            // Obtener los datos del formulario
            $hechizoId = $_POST['hechizoId'];

            // Consulta SQL para insertar un nuevo hechizo asociado al usuario
            $sql = "INSERT INTO user_spells (user_id, spell_id) VALUES (?, ?)";
            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("ii", $usuarioId, $hechizoId);

            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo "Nuevo hechizo asociado al usuario con ID $usuarioId insertado correctamente.";
            } else {
                echo "Error al insertar el nuevo hechizo asociado: " . $stmt->error;
            }

            // Cerrar la declaración preparada
            $stmt->close();
        }

        ?>

        <!---BORRAR ASOCIADO-->
        <?php
        // Asegúrate de tener la conexión a la base de datos activa
        require_once 'conexion.php';

        // Verificar si se envió el formulario (cuando se presiona el botón de borrar)
        if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['borrarHechizo'])) {
            // Obtener el ID del hechizo que se va a borrar desde el formulario
            $hechizoId = $_POST['hechizoId'];

            // Consulta SQL para borrar el hechizo asociado
            $sql = "DELETE FROM user_spells WHERE spell_id = ?";
            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("i", $hechizoId);

            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo "Hechizo asociado con ID $hechizoId borrado correctamente.";
            } else {
                echo "Error al borrar el hechizo asociado: " . $stmt->error;
            }

            // Cerrar la declaración preparada
            $stmt->close();
        }

        ?>
    <?php
        // Asegúrate de tener la conexión a la base de datos activa
        require_once 'conexion.php';

        // Verificar si se envió el formulario (cuando se presiona el botón de insertar)
        if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['insertarHechizo'])) {
            // Obtener los datos del formulario
            $nombre = $_POST['nombre'];
            $tipo = $_POST['tipo'];
            $utilidad = $_POST['utilidad'];

            // Consulta SQL para insertar un nuevo hechizo
            $sql = "INSERT INTO hechizos (nombre, tipo, utilidad) VALUES (?, ?, ?)";
            $stmt = $conexion->prepare($sql);
            $stmt->bind_param("sss", $nombre, $tipo, $utilidad);

            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo "Nuevo hechizo '$nombre' insertado correctamente.";
                echo "<table class=asociado-container2>" .
                    "<tr>
                    <th class = tag-asociado>Nombre:</th> 
                    <td>" . '$nombre' . "</td>      
                </tr> </table>";
            } else {
                echo "Error al insertar el nuevo hechizo: " . $stmt->error;
            }

            // Cerrar la declaración preparada
            $stmt->close();
        }
    } else {
        echo "usuario no econtrado";
    }

    // Cerrar la conexión
    $conexion->close();
    ?>
    <!----

PDO (PHP Data Objects) es una extensión de PHP que proporciona una capa de abstracción de acceso a datos. 
Su objetivo principal es proporcionar una interfaz uniforme para acceder a diferentes tipos de bases de datos,
permitiendo a los desarrolladores escribir código que sea independiente del sistema de gestión de bases de datos (DBMS) subyacente.

--->
</body>

</html>