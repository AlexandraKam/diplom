<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChairController;
use App\Http\Controllers\CinemaHallController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeanceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
  
  Route::post('/cinema-halls', [CinemaHallController::class, 'store'])->name('cinemaHall.store');
  Route::delete('/cinema-halls/{hall}', [CinemaHallController::class, 'destroy'])->name('cinemaHall.destroy');
  Route::patch('/cinema-halls/{hall}', [CinemaHallController::class, 'update'])->name('cinemaHall.update');
  Route::post('/cinema-halls/{hall}/chairs', [CinemaHallController::class, 'createChairs'])->name('cinemaHall.createChairs');

  Route::post('/movies', [MovieController::class, 'store'])->name('movie.store');
  Route::delete('/movies/{movie}', [MovieController::class, 'destroy'])->name('movie.destroy');
  Route::post('/movies/{movie}', [MovieController::class, 'update'])->name('movie.update');

  Route::post('/seances', [SeanceController::class, 'store'])->name('seance.store');
});

Route::get('client', [ClientController::class, 'index']);
Route::get('seance/{seanceId}', [ClientController::class, 'seance']);
Route::post('orders/{seanceId}', [OrderController::class, 'store']);
Route::get('orders/{order}', [OrderController::class, 'show'])->name('order.show');


require __DIR__ . '/auth.php';