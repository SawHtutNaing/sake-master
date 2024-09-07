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
        Schema::create('order_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cocktails_id');
            $table->foreignId('category_id');
            $table->float('price');
            $table->longText('image');
            $table->json('ingredient');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_records');
    }
};
