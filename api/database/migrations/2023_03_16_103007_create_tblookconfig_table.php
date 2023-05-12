<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblookconfig', function (Blueprint $table) {
            $table->id();
            $table->string('ip')->nullable();
            $table->string('codigo')->nullable();
            $table->string('status')->nullable();
            $table->float('potencia')->nullable();
            $table->float('velocidade')->nullable();
            $table->string('Cad')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblookconfig');
    }
};
