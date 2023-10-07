<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use Illuminate\Http\Request;
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
      //
    ]);
  }

  public function hall($hall): Response
  {

    return Inertia::render('Client/Hall', [
      'hall' => $hall
    ]);
  }

  public function payment(Request $request, $payment): Response
  {
    if ($request->has('seatsId')) {
      $seatsId = $request->input('seatsId');
    }

    return Inertia::render('Client/Payment', [
      'payment' => $payment,
      'seatsId' => $seatsId
    ]);
  }

  public function ticket(Request $request, $ticket): Response
  {

    if ($request->has('chairs')) {
      $chairs = $request->input('chairs');
    }

    return Inertia::render('Client/Ticket', [
      'ticket' => $ticket,
      'chairs' => $chairs
    ]);
  }


}