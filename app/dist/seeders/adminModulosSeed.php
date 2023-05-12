<?php

namespace Database\Seeders;

use App\Models\AdminModulo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class adminModulosSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->SeedAdmin();
        $this->SeedSonarAdmin();
        $this->SeedSonarShipping();
    }

    private function SeedAdmin(){

        $user = DB::table('users')->where('name', '=', 'admin')->first();
        $modulos = DB::table('modulos')->get();

        foreach ($modulos as $key => $m) {
            
            AdminModulo::updateOrCreate([

                'user' => $user->id,
                'modulo' => $m->id
            ]);
        }
    }
    
    private function SeedSonarAdmin(){

        $user = DB::table('users')->where('name', '=', 'Inventario')->first();
        $modulos = DB::table('modulos')->where('descricao', '=', 'sonar')->get();

        foreach ($modulos as $key => $m) {
            
            AdminModulo::updateOrCreate([

                'user' => $user->id,
                'modulo' => $m->id
            ]);
        }
    }

    private function SeedSonarShipping(){

        $user = DB::table('users')->where('name', '=', 'Shipping')->first();
        $modulos = DB::table('modulos')->where('descricao', '=', 'Shipping')->get();

        foreach ($modulos as $key => $m) {
            
            AdminModulo::updateOrCreate([

                'user' => $user->id,
                'modulo' => $m->id
            ]);
        }
    }

}
