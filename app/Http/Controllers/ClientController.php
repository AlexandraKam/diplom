<?php

namespace App\Http\Controllers;

use App\Models\Chair;
use App\Models\CinemaHall;
use App\Models\Seance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(): Response
  {
    return Inertia::render('Client/Index', [
      'seances' => Seance::join('cinema_halls', 'cinema_hall_id', '=', 'cinema_halls.id')
        ->select('seances.*')
        ->where('cinema_halls.opened', '=', '1')
        ->with(['movie', 'cinemaHall'])->get()
    ]);
  }

  public function seance($seanceId): Response
  {
    return Inertia::render('Client/Hall', [
      'seance' => Seance::with([
        'movie',
        'cinemaHall.chairs' => function ($query) use ($seanceId) {
          $query->leftJoin('chair_order', 'chair_order.chair_id', '=', 'chairs.id')
            ->leftJoin('orders', 'chair_order.order_id', '=', 'orders.id')
            ->leftJoin('seances', 'orders.seance_id', '=', 'seances.id')
            ->select('chairs.id', 'row', 'seat', 'type', 'chairs.cinema_hall_id', DB::raw('IIF(seances.id IS NULL, 1, 0) as `free`'));
        }
      ])->find($seanceId)
    ]);
  }

}