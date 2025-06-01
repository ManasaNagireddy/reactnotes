<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

Route::get('/hello', function () {
    return response()->json([
        'message' => 'Hello from Laravel API!',
    ]);
});

Route::get('/test', function () {
    return response()->json(['status' => 'API is working']);
});

Route::apiResource('/users', UserController::class);


Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
