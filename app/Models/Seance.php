<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
  use HasFactory;

  function cinemaHall()
  {
    return $this->belongsTo(CinemaHall::class);
  }

  function movie()
  {
    return $this->belongsTo(Movie::class);
  }
}