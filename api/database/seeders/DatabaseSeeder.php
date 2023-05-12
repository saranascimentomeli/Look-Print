<?php

namespace Database\Seeders;

use App\config\ConnectionString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $this->call([

            UserSeeder::class,
            ModuloSeeder::class,
            RoleSeeder::class,
            RouteSeeder::class,
            RoleRoute::class,
            UsersRoles::class,
            adminModulosSeed::class,
            RolesRolesSeeder::class,
            atualizacoesSeeder::class
            
        ]);


        // Seed for new Cads implement heatmap shipping
        // for ($i=1; $i < 39; $i++) { 
                
            
        //     DB::connection(ConnectionString::heatmap_shipping)->table('flowrack_cads')->insert([

        //         'flowrack' => $i,
        //         'cad' => 4
        //     ]);
        // }
    }
}
