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

            ['robo' => 'look', 'data' => date("Y-m-d H:i:s"), 'cad' => 'BRSP04', 'cookies' => '']
        );
    }
}
