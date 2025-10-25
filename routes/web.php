<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // sleep(2);
    return inertia('Auth/Login');
});

Route::inertia('/home', 'Home');