<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Storage;

class MovieController extends Controller
{
  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string',
      'poster' => 'nullable|file|mimes:jpg,bmp,png|max:2048',
      'duration' => 'integer|nullable',
      'synopsis' => 'nullable|string',
      'origin' => 'nullable|string',
      'genre' => 'nullable|string',
    ]);

    $posterFilePath = Storage::url($request->file('poster')->store('poster', 'public'));

    $movie = new Movie;

    $movie->name = $validated['name'];

    if (isset($validated['duration'])) {
      $movie->duration = $validated['duration'];
    }
    if (isset($validated['synopsis'])) {
      $movie->synopsis = $validated['synopsis'];
    }
    if (isset($validated['origin'])) {
      $movie->origin = $validated['origin'];
    }
    if (isset($validated['genre'])) {
      $movie->genre = $validated['genre'];
    }
    if (isset($posterFilePath)) {
      $movie->poster = $posterFilePath;
    }

    $movie->save();

    return to_route('admin.index');
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Movie $movie)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Movie $movie)
  {
    $movie->delete();
    return to_route('admin.index');
  }
}