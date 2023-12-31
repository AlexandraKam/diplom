<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CinemaHall extends Model
{
  use HasFactory;

  function chairs()
  {
    return $this->hasMany(Chair::class);
  }
}