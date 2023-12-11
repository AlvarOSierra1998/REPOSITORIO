<?php

use App\Http\Controllers\AnimalesController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dameanimales', [AnimalesController::class, "getAnimales"]);
Route::get('/vista', function(){
    return view('prueba');
});
