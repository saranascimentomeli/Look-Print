<?php

namespace Database\Seeders;

use App\Models\Modulo;
use Illuminate\Database\Seeder;

class ModuloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        Modulo::UpdateOrCreate([

            'descricao' => 'Gerenciamento Usuários'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'look'
        ]);

      
    }
}
