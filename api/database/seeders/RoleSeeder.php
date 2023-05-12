<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $modulos = DB::table('modulos')->get();

        Role::UpdateOrCreate([


            'descricao' => 'admin',
        ]);

      

        $modulo_sonar = DB::table('modulos')->where('descricao', '=', 'Gerenciamento Usuários')->first();
        Role::UpdateOrCreate([


            'descricao' => 'user_manage',
            'modulo' => $modulo_sonar->id
        ]);


       $modulo_look = DB::table('modulos')->where('descricao', '=', 'look')->first();
        Role::UpdateOrCreate([

            'descricao' => 'look_admin',
            'modulo' => $modulo_look->id
        ]);


    }
}
