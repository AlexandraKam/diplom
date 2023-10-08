<?php

use App\Models\CinemaHall;
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
        Schema::create('chairs', function (Blueprint $table) {
            $table->id();
            $table->integer('row');
            $table->integer('seat');
            $table->enum('type', ['standart', 'vip'])->default('standart');
            $table->boolean('free')->default(true);
            $table->foreignIdFor(CinemaHall::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chairs');
    }
};
