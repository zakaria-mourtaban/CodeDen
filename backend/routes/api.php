<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\FileController;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// Users
Route::prefix("/users")->group(function(){
    Route::get("/",[UserController::class, "get_users"]);
    Route::get("/{id}",[UserController::class, "get_user"]);
    Route::post("/",[UserController::class, "add_user"]);
    Route::put("/{id}",[UserController::class, "edit_user"]);
    Route::post("/delete_user/{id}",[UserController::class, "delete_user"]);
});


