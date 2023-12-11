<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnimalesController extends Controller
{
    public function getAnimales(){
        $animales = ["takeli","Leon","Gacela","simba"];
        return response()->json(["mesnaje" => "los animales son",  "datos" => $animales]);
        
    }
}
