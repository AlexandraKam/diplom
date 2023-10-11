<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    function seance(){
      return $this->belongsTo(Seance::class);
    }

    function chairs(){
      return $this->belongsToMany(Chair::class);
    }
}
