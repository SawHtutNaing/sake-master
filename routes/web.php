<?php

use App\Http\Controllers\CocktailController;
use App\Http\Controllers\OrderRecordController;
use App\Http\Controllers\ProfileController;
use App\Models\Cocktail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__ . '/auth.php';

Route::get('/', function () {
    $cocktails = Cocktail::all();

    return Inertia::render('Home', [
        'cocktails' => $cocktails,

        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),

    ]);
})->middleware([])->name('dashboard');




Route::resource('cocktails', CocktailController::class, [])->middleware(['auth', 'verified']);
Route::resource('orders', OrderRecordController::class, [])->middleware(['auth', 'verified']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



// Route::get('/test', function () {
//     return Inertia::render('test');
// });
