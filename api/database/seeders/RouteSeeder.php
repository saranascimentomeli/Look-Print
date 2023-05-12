<?php

namespace Database\Seeders;

use App\Models\Route;
use Illuminate\Database\Seeder;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      

        $usuario = Route::UpdateOrCreate(
            [
                'path' => 'Usuarios',
                'title' => 'Gestão de usuários',
                'icon' => 'person',
                'class' => '',
            ]
        );

     
        Route::UpdateOrCreate(
            [
                'path' => 'usuarios/gerenciamento'
            ],
            [
                'title' => 'Usuários',
                'icon' => 'manage_accounts',
                'class' => '',
                'father' => $usuario->id,
            ]
        );

       

        $look = Route::UpdateOrCreate(
            [
                'path' => 'look',
                'title' => 'Look Printer',
                'icon' => 'print',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'look/cadastroimp'
            ],
            [
                'title' => 'Cad. Impressora',
                'icon' => 'print_disabled',
                'class' => '',
                'father' => $look->id,
            ]
        );

    
        Route::UpdateOrCreate(
            [
                'path' => 'look/Mapa'
            ],
            [
                'title' => 'Mapa',
                'icon' => 'map',
                'class' => '',
                'father' => $look->id,
            ]
        );

    }
}
