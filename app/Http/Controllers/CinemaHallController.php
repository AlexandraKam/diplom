<?php

namespace App\Http\Controllers;

use App\Models\Chair;
use App\Models\CinemaHall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CinemaHallController extends Controller
{
  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'number' => 'required|unique:cinema_halls|max:5'
    ]);
    $cinemaHall = new CinemaHall;
    $cinemaHall->number = $validated['number'];
    $cinemaHall->opened = false;
    $cinemaHall->save();

    return to_route('admin.index');
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, CinemaHall $hall)
  {
    $data = $request->validate([
      'rows' => 'numeric|min:1',
      'seatsRow' => 'numeric|min:1',
      'price' => 'numeric|min:0',
      'priceVIP' => 'numeric|min:0',
      'opened' => 'nullable|boolean'
    ]);

    if(isset($data['number'])){
      $hall->number = $data['number'];
    }
    if(isset($data['rows'])){
      $hall->rows = $data['rows'];
    }
    if(isset($data['seatsRow'])){
      $hall->seatsRow = $data['seatsRow'];
    }
    if(isset($data['price'])){
      $hall->price = $data['price'];
    }
    if(isset($data['priceVIP'])){
      $hall->priceVIP = $data['priceVIP'];
    }
    if(isset($data['opened'])){
      $hall->opened = $data['opened'];
    }

    $hall->save();

    return to_route('admin.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(CinemaHall $hall)
  {
    $hall->delete();
    return to_route('admin.index');
  }

  public function createChairs(Request $request, CinemaHall $hall){
    $data = $request->validate([
      'chairs' => 'array',
      'chairs.*.row' => 'numeric|min:0',
      'chairs.*.seat' => 'numeric|min:0',
      'chairs.*.type' => 'in:standart,vip',
    ]);
    $chairs = collect($data['chairs'])->map(function($dataItem, $key){ 
      $chiar = new Chair;
      $chiar->row = $dataItem['row'];
      $chiar->seat = $dataItem['seat'];
      $chiar->type = $dataItem['type'];
      return $chiar;
    });
    $hall->chairs()->delete();
    $hall->chairs()->saveMany($chairs);

    return to_route('admin.index');
  }
}