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

  public function payment($payment): Response
  {

    return Inertia::render('Client/Payment', [
      'payment' => $payment
    ]);
  }

  public function ticket($ticket): Response
  {

    return Inertia::render('Client/Ticket', [
      'ticket' => $ticket
    ]);
  }


}