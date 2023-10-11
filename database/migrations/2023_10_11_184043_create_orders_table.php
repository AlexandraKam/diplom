<?php

use App\Models\Chair;
use App\Models\Order;
use App\Models\Seance;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->string('number')->unique();
      $table->foreignIdFor(Seance::class);
      $table->timestamps();
    });

    Schema::create('chair_order', function (Blueprint $table) {
      $table->id();
      $table->foreignIdFor(Chair::class);
      $table->foreignIdFor(Order::class);
      $table->unique(['chair_id', 'order_id']);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('chair_order');
    Schema::dropIfExists('orders');
  }
};