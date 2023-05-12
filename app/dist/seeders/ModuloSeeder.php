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

            'descricao' => 'Sonar'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Gerenciamento Usuários'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Eagle inbound'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Gate'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Acompanhamento'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Shipping'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Saga'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'Sla'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'heatmap'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'nove'
        ]);

        Modulo::UpdateOrCreate([

            'descricao' => 'look'
        ]);

        // Modulo::UpdateOrCreate([

        //     'descricao' => 'Eagle Outbound'
        // ]);
    }
}
