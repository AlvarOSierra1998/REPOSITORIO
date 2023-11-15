



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


function suma(event) {
    event.preventDefault()
    var numero = parseFloat(document.getElementById('valor1').value);
    var numero2 = parseFloat(document.getElementById('valor2').value);
    var resultado = numero + numero2;
    alert("la suma es " + mostrarResultado(resultado));
  }

  function restar() {
    var numero = parseFloat(document.getElementById('valor1').value);
    var numero2 = parseFloat(document.getElementById('valor2').value);
    var resultado = numero - numero2;
    mostrarResultado(resultado);
  }

  function multiplicar() {
    var numero = parseFloat(document.getElementById('valor1').value);
    var numero2 = parseFloat(document.getElementById('valor2').value);
    var resultado = numero * numero2;
    mostrarResultado(resultado);
  }

  function dividir() {
    var numero = parseFloat(document.getElementById('valor1').value);
    var numero2 = parseFloat(document.getElementById('valor2').value);

    if (numero2 !== 0) {
      var resultado = numero / numero2;
      mostrarResultado(resultado);
    } else {
      alert('No se puede dividir por cero.');
    }
  }

  function mostrarResultado(resultado,event) {
    event.preventDefault()
    
    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
  }