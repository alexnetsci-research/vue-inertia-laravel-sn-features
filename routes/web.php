<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login.attempt');
Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');


Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegistrationForm'])->name('registration.form');
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('register');

Auth::routes([
    'login' => false,
    'register' => false
]);

Route::middleware('auth')->group(function () {
    Route::get('/flux', [App\Http\Controllers\HomeController::class, 'index'])->name('flux');

    Route::get('/{user}', [App\Http\Controllers\ProfileController::class, 'showMyProfile'])->name('my.profile');
    Route::get('/{id}/profile', [App\Http\Controllers\ProfileController::class, 'showUserProfile'])->name('profiles.user');
    Route::post('/profile/picture', [App\Http\Controllers\ProfileController::class, 'uploadProfilePicture'])->name('profiles.upload_profile_picture');
    Route::post('/profile/cover', [App\Http\Controllers\ProfileController::class, 'uploadProfileCover'])->name('profiles.upload_profile_cover');
});

Route::fallback(function () {
    return abort(404);
});
