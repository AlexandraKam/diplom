<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Movie;
use App\Models\Seance;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(): Response
  {
    return Inertia::render('Admin/Index', [
      'cinemaHalls' => CinemaHall::orderBy('number')->with('chairs')->get(),
      'movies' => Movie::all(),
      'seances' => Seance::with(['movie', 'cinemaHall'])->get()
    ]);
  }

}