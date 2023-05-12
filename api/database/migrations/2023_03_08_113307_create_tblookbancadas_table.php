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
        Schema::create('tblookbancadas', function (Blueprint $table) {
            $table->id();
            $table->string('Layout')->nullable();
            $table->string('Bancada')->nullable();
            $table->string('Impressora');
            $table->float('CoordX');
            $table->float('CoordY');
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
        Schema::dropIfExists('tblookbancadas');
    }
};
