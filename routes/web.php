<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // sleep(2);
    return inertia('Auth/Login');
});

Route::inertia('/dashboard', 'Home');
Route::inertia('/response', 'Home');
Route::inertia('/button', 'Home');