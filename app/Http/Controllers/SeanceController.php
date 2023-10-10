<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Movie;
use App\Models\Seance;
use Illuminate\Http\Request;

class SeanceController extends Controller
{
  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'start' => ['required','string','regex:/^\d{2}:\d{2}$/i'],
      'movie_id' => 'required',
      'cinema_hall_id' => 'required'
    ]);
    $movie = Movie::find($validated['movie_id']);
    $hall = CinemaHall::find($validated['cinema_hall_id']);

    $seance = new Seance;
    $seance->start = $validated['start'];
    $seance->movie()->associate($movie);
    $seance->cinemaHall()->associate($hall);

    $seance->save();

    return to_route('admin.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Seance $seance)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Seance $seance)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Seance $seance)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Seance $seance)
  {
    //
  }
}