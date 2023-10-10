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

    if ($request->hasFile('poster')) {
      $posterFilePath = Storage::url($request->file('poster')->store('poster', 'public'));
    }

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
    $data = $request->validate([
      'name' => 'nullable|string',
      'poster' => 'nullable|file|mimes:jpg,bmp,png|max:2048',
      'duration' => 'integer|nullable',
      'synopsis' => 'nullable|string',
      'origin' => 'nullable|string',
      'genre' => 'nullable|string',
    ]);

    error_log('test');
    if($request->hasFile('poster'))
    {
      error_log('file exist');
      $posterFilePath = Storage::url($request->file('poster')->store('poster', 'public'));
      error_log($posterFilePath);
      $movie->poster = $posterFilePath;
    }

    if (isset($data['name'])) {
      $movie->name = $data['name'];
    }
    if (isset($data['duration'])) {
      $movie->duration = $data['duration'];
    }
    if (isset($data['synopsis'])) {
      $movie->synopsis = $data['synopsis'];
    }
    if (isset($data['origin'])) {
      $movie->origin = $data['origin'];
    }
    if (isset($data['genre'])) {
      $movie->genre = $data['genre'];
    }
    if (isset($posterFilePath)) {
      $movie->poster = $posterFilePath;
    }

    $movie->save();

    return to_route('admin.index');
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