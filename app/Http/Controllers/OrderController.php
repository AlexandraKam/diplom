<?php

namespace App\Http\Controllers;

use App\Models\Chair;
use App\Models\Order;
use App\Models\Seance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request, $seanceId)
  {
    if ($request->has('seatsId')) {
      $seatsId = $request->input('seatsId');
    }

    $seatsId = explode(',', $seatsId);

    if (empty($seatsId)) {
      return to_route('admin.index');
    }

    $seance = Seance::with(['movie', 'cinemaHall'])->find($seanceId);
    $chairs = Chair::whereIn('id', $seatsId)->get();

    $orderId = uniqid();
    $order = new Order;
    $order->number = $orderId;
    $order->seance()->associate($seance);
    $order->save();
    $order->chairs()->attach($chairs);
    $order->save();

    return Inertia::render('Client/Payment', [
      'seance' => $seance,
      'chairs' => $chairs,
      'orderId' => $orderId
    ]);
  }

  /**
   * Display the specified resource.
   */
  public function show($order)
  {
    return Inertia::render('Client/Ticket', [
      'order' => Order::with(['seance.movie','seance.cinemaHall', 'chairs'])->where('number', $order)->first()
    ]);
  }

}