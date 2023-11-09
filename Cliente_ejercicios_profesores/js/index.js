
let asignatura = {
    Cliente: {
        nombre: "Cliente",
        curso: 2,
        horas: 6,
        cambiarHora: function(nuevahora){
            this.horas = nuevahora;
        },
    },
     Interfaces :{
        nombre: "Interfaces webs",
        curso: 2,
        horas: 4,
        cambiarHora: function(nuevahora){
            this.horas = nuevahora;
        },
    },

     Despliegue_servidor: {
        nombre: "Despliegue servidor",
        curso: 2,
        horas: 6,
        cambiarHora: function(nuevahora){
            this.horas = nuevahora;
        },
    },
    
     Despliegue_web: {
        nombre: "Despliegue web",
        curso: 2,
        horas: 4,
        cambiarHora: function(nuevahora){
            this.horas = nuevahora;
        },
    }


   

}

var Tutor = {
    Nombre: "evelyn",
    edad: "28",
    Dni: "94730263G",
    Titulo_universitario: "ingenieria informatica",
    cambiarNombre: function(nuevoNombre){
        this.Nombre = nuevoNombre;
    },
}

let nota_m = {
    Despliegue_servidor: 2,
    Interfaces: 6,
    Cliente: 7,
    Despliegue_web: 9,
}

let Alumno = {
    Nombre: "Alvaro",
    Edad: 24,
    Ciclo: "DAW",
    Curso: 2,
    Tutor: "Evelyn",
    Asignaturas: asignatura,
    nota_media: nota_m,
    calcularMedia: function () {
        let notas = Object.values(this.nota_media); +
            console.log(notas);
        let sum = 0;
        for (let nota of notas) {
            sum += nota;
        }
        return sum / notas.length;
    },
}


function mostrar() {
    let tablaalumno = document.getElementById('alumno');
    let tablaContent = '';

    tablaContent += `
        <tr>
            <th colspan="2" class="text-center">Información del Alumno</th>
        </tr>
        <tr>
            <th>Nombre:</th>
            <td class="text-center">${Alumno.Nombre}</td>
        </tr>
        <tr>
            <th>Edad:</th>
            <td class="text-center">${Alumno.Edad}</td>
        </tr>
        <tr>
            <th>Ciclo:</th>
            <td class="text-center">${Alumno.Ciclo}</td>
        </tr>
        <tr>
            <th>Curso:</th>
            <td class="text-center">${Alumno.Curso}</td>
        </tr>
        <tr>
            <th>Tutor:</th>
            <td class="text-center">${Alumno.Tutor}</td>
        </tr>
        <tr>
            <th class="text-center">Asignaturas</th>
            <th class="text-center">Nota Media</th>
        </tr>
    `;

    for (const asignaturaNombre in Alumno.Asignaturas) {
        tablaContent += `
            <tr>
                <td>${Alumno.Asignaturas[asignaturaNombre].nombre}</td>
                <td class="text-center">${Alumno.nota_media[asignaturaNombre]}</td>
            </tr>
        `;
    }

    tablaalumno.innerHTML = tablaContent;
};

// Llama a la función para mostrar la tabla
mostrar();




































