



function validarFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById('name').value;
    var edad = document.getElementById('numero_edad').value;

    var nombreValido = /^[a-zA-Z\s]+$/.test(nombre);

    var edadValida = !isNaN(edad) && parseInt(edad) > 0;

    if (!nombreValido) {
        alert('Por favor, ingrese un nombre válido (solo letras y espacios).');
        return false;
    }

    if (!edadValida) {
        alert('Por favor, ingrese una edad válida (número positivo).');
        return false;
    }

    alert('¡Formulario enviado con éxito!');
    return true;
}


function agregarTarea() {
    var tareaInput = document.getElementById('tareaUsuario');
    var tarea = tareaInput.value;

    if (tarea.trim() !== '') {

        var lista = document.getElementById('tareasUsuario');
        var nuevoElemento = document.createElement('li');
        nuevoElemento.innerHTML = " Se ha añadido: " + tarea + " a la lista de tareas ";
        nuevoElemento.style.color = "orange";
        nuevoElemento.style.margin="auto";
        nuevoElemento.style.display = "flex";
        nuevoElemento.style.flexDirection = "column";
        nuevoElemento.style.justifyContent = "center";
        nuevoElemento.style.alignItems = "center";
        nuevoElemento.style.marginTop = "4%";

        
        
        
        var botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = 'Eliminar';
        botonEliminar.style.width = "10%";
        botonEliminar.style.margin = "auto";
        botonEliminar.style.display = "flex";
        botonEliminar.style.flexDirection = "column";
        botonEliminar.style.justifyContent = "center";
        botonEliminar.style.alignItems = "center";
        botonEliminar.style.padding = "0.8em";
        botonEliminar.style.background = "transparent";
        botonEliminar.style.color = "black";
        botonEliminar.style.border = "none";
        botonEliminar.style.borderRadius = "8%";
        botonEliminar.style.outline = "none";
        botonEliminar.style.backgroundColor = "orange";
        botonEliminar.style.marginTop = "2%";
        botonEliminar.className = 'delete-button';
        botonEliminar.onclick = function () {
            lista.removeChild(nuevoElemento);
            alert("Se ha eliminado correctamente")
        };

        nuevoElemento.appendChild(botonEliminar);
        lista.appendChild(nuevoElemento);
        tareaInput.value = '';
    }
}



function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 !== 0) {
      return num1 / num2;
  } else {
      alert('No se puede dividir por cero.');
      return undefined;
  }
}

function procesarEjercicio3(event) {
  event.preventDefault();

  var operacion = event.submitter.value; // Obtener el valor del botón que fue presionado

  var num1Input = document.getElementById('num1');
  var num1 = parseFloat(num1Input.value);
  var num2Input = document.getElementById('num2');
  var num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
      alert('Ingresa números válidos.');
      return;
  }

  var resultado;

  switch (operacion) {
      case 'sumar':
          resultado = sumar(num1, num2);
          break;
      case 'restar':
          resultado = restar(num1, num2);
          break;
      case 'multiplicar':
          resultado = multiplicar(num1, num2);
          break;
      case 'dividir':
          resultado = dividir(num1, num2);
          break;
      default:
          alert('Operador no válido.');
          return;
  }

  if (resultado !== undefined) {
      // Mostrar el resultado en el div con id "resultadoEj3"
      var resultadoDiv = document.getElementById('resultadoEj3');
      resultadoDiv.innerHTML = 'Resultado operación: ' + resultado;
  }
}

function comprobarEmail(){
  var emailInput = document.getElementById('email');
  var email = emailInput.value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(email)) {
      alert('Por favor introduzca un email válido');
      // Reinicia el valor del campo email al introducir algo que no esta en la expresión regular
      emailInput.value = '';
  }else{
      return true;
  }
}

function comprobarContraseña() {
  
  var passInput = document.getElementById('password');
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var pass1 = passInput.value;

  if (!regex.test(pass1)) {
      alert('Por favor introduzca una contraseña con al menos un dígito, una letra minúscula, una letra mayúscula y con 8 caracteres mínimo.');
      // Reinicia el valor del campo password al introducir algo que no está en la expresión regular
  }else{
      return true;
  }
}
function contraseñasIguales(){
  var pass1 = document.getElementById('password');
  var pass2 = document.getElementById('repitePassword');
  if (pass1.value != pass2.value) {
      alert('Por favor introduzca la misma contraseña');
      pass2.value = '';
  }else{
      return true;
  }
}

function procesarEjercicio4(event) {
  event.preventDefault();
  var emailValido = comprobarEmail(); // Asegúrate de que esta función devuelva un valor booleano
  var contrasenaValida = comprobarContraseña();
  var contrasenasIguales = contraseñasIguales(); // Asegúrate de que esta función devuelva un valor booleano

  // Verifica si todas las funciones de comprobación son exitosas y no hay campos vacíos
  if (emailValido && contrasenaValida && contrasenasIguales ) {
      alert('Registro exitoso. Todos los campos son válidos.');
  }
}

function comprobarEmail(){
  var emailInput = document.getElementById('email');
  var email = emailInput.value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(email)) {
      alert('Por favor introduzca un email válido');
      // Reinicia el valor del campo email al introducir algo que no esta en la expresión regular
      emailInput.value = '';
  }else{
      return true;
  }
}

function comprobarContraseña() {
  
  var passInput = document.getElementById('password');
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  var pass1 = passInput.value;

  if (!regex.test(pass1)) {
      alert('Por favor introduzca una contraseña con al menos un dígito, una letra minúscula, una letra mayúscula y con 8 caracteres mínimo.');
      // Reinicia el valor del campo password al introducir algo que no está en la expresión regular
  }else{
      return true;
  }
}
function contraseñasIguales(){
  var pass1 = document.getElementById('password');
  var pass2 = document.getElementById('repitePassword');
  if (pass1.value != pass2.value) {
      alert('Por favor introduzca la misma contraseña');
      pass2.value = '';
  }else{
      return true;
  }
}

function procesarEjercicio4(event) {
  event.preventDefault();
  var emailValido = comprobarEmail(); // Asegúrate de que esta función devuelva un valor booleano
  var contrasenaValida = comprobarContraseña();
  var contrasenasIguales = contraseñasIguales(); // Asegúrate de que esta función devuelva un valor booleano

  // Verifica si todas las funciones de comprobación son exitosas y no hay campos vacíos
  if (emailValido && contrasenaValida && contrasenasIguales ) {
      alert('Registro exitoso. Todos los campos son válidos.');
  }
}

