<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
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
      'cinemaHalls' => CinemaHall::orderBy('number')->with('chairs')->get()
    ]);
  }

}