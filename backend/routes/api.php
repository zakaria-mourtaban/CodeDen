<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\WorkspaceController;
use App\Http\Controllers\WorkspaceAccessController;

use App\Http\Controllers\Auth\JWTAuthController;
use App\Events\Example;
use App\Http\Middleware\JwtMiddleware;

Route::post("/register", [JWTAuthController::class, "register"]);
Route::post("/login", [JWTAuthController::class, "login"]);

Route::get('/user', [JWTAuthController::class, 'getUser']);
Route::post('/logout', [JWTAuthController::class, 'logout']);


// Users
Route::middleware([JwtMiddleware::class])->prefix("/users")->group(function () {
	// {
	//     "name":"ahmadd",
	//     "email":"ah@gmail.com",
	//     "password":"123"
	// }
	Route::get("/", [UserController::class, "get_users"]);



	Route::get("/{id}", [UserController::class, "get_user"]);
	Route::post("/", [UserController::class, "add_user"]);
	Route::put("/{id}", [UserController::class, "edit_user"]);
	Route::post("/delete_user/{id}", [UserController::class, "delete_user"]);
});

// Files
Route::middleware([JwtMiddleware::class])->prefix("/files")->group(function () {
	// Route::get("/",[FileController::class, "get_files"]);
	// Route::get("/{id}",[FileController::class, "get_file"]);

	Route::post("/", [FileController::class, "save_code_file"]);
	Route::get("/", [FileController::class, "get_code_file"]);
	Route::post("/delete_file", [FileController::class, "delete_code_file"]);
	Route::put("/", [FileController::class, "update_code_file"]);
	Route::get("/download_file", [FileController::class, "download_code_file"]);

	// Route::get("/{id}",[FileController::class, "get_file"]);
});


// Workspaces
Route::middleware([JwtMiddleware::class])->prefix("/workspaces")->group(function () {
	Route::get("/openworkspace/{id}", [WorkspaceController::class, "open_workspace"]);
	Route::post("/", [WorkspaceController::class, "add_workspace"]);
	Route::post("/delete_workspace/{id}", [WorkspaceController::class, "delete_workspace"]);
});

// Workspaces Access
Route::middleware([JwtMiddleware::class])->prefix("/workspaces_access")->group(function () {
	Route::post("/", [WorkspaceAccessController::class, "grant_access"]);
	Route::put("/", [WorkspaceAccessController::class, "update_access"]);
	Route::get("/", [WorkspaceAccessController::class, "get_accessed_user"]);
});
