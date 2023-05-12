<?php

namespace Database\Seeders;

use App\Models\RolesRoute;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleRoute extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->SeedAdmin();    
        $this->Seedlook();
    }

   
    private function SeedAdmin()
    {

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        $routes = DB::table('routes')->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function Seedlook()
    {

        $role = DB::table('roles')->where('descricao', '=', 'look_admin')->first();

        $path = ['look', 'look/Mapa', 'look/cadastroimp'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }
}
