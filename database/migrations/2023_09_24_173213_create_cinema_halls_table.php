<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cinema_halls', function (Blueprint $table) {
            $table->id();
            $table->char('number', 5);
            $table->integer('rows')->nullable();
            $table->integer('seatsRow')->nullable();
            $table->integer('price')->nullable();
            $table->integer('priceVIP')->nullable();
            $table->boolean('opened')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cinema_halls');
    }
};
