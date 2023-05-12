<?php

namespace Database\Seeders;

use App\Models\tbatualizacoes;
use Illuminate\Database\Seeder;

class atualizacoesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        tbatualizacoes::updateOrCreate(

            ['robo' => 'lms', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => ''],
            ['robo' => 'lmsindireto', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => ''],
            ['robo' => 'Shipping', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRRC01', 'cookies' => ''],
            ['robo' => 'saga', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => ''],
            ['robo' => 'slaplus', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => ''],
            ['robo' => 'look', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => '']
        );
    }
}
