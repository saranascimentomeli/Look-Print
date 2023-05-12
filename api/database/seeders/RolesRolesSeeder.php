<?php

namespace Database\Seeders;

use App\Models\RoleRoles;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $role_admin = DB::table('roles')->where('descricao', '=', 'admin')->first();
        $all_roles = DB::table('roles')->get();
        foreach ($all_roles as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_admin->id,
                'role_children' => $role->id
            ]);
        }



        $role_inventario = DB::table('roles')->where('descricao', '=', 'sonar_admin')->first();
        $roles_inventario = DB::table('roles')->where('descricao', 'like', 'sonar_%')->get();
        foreach ($roles_inventario as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_inventario->id,
                'role_children' => $role->id
            ]);
        }

        $role_look = DB::table('roles')->where('descricao', '=', 'look_admin')->first();
        $roles_look = DB::table('roles')->where('descricao', 'like', 'look_%')->get();

        foreach ($roles_look as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_look->id,
                'role_children' => $role->id
            ]);
        }
    }
}
