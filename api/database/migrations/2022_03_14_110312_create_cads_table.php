<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cads', function (Blueprint $table) {
            $table->id();
            $table->string('unidade');
            $table->integer('active')->default(1);
            $table->timestamps();
        });
        
        
        DB::table('cads')->insert([

            ['unidade' => 'BRSP04', 'active' => 1],
            ['unidade' => 'BRSP01', 'active' => 1],
            ['unidade' => 'BRSP02', 'active' => 1],
            ['unidade' => 'BRSP03', 'active' => 1],
            ['unidade' => 'BAH01', 'active' => 1],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cads');
    }
}
