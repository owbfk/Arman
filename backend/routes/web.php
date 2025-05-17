<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::middleware('CORS')->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
});

Route::middleware('CORS')->group(function () {
    Route::get('/products/{id}', [ProductController::class, 'show']);
});



Route::get('/', function () {
    return view('welcome');
});
