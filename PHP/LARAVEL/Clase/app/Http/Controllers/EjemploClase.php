<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Alumnos;

class EjemploClase extends Controller
{
    public function obtenerAlumnos(){
        return Alumnos::AlumnoRow();
    }
}
