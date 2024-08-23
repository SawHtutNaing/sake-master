<?php

use App\Http\Controllers\CocktailController;
use App\Http\Controllers\ProfileController;
use App\Models\Cocktail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $cocktails = Cocktail::all();
    return Inertia::render(
        'Hello',
        [
            'cocktails' => $cocktails
        ]

    );
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('cocktails', CocktailController::class, [])->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
