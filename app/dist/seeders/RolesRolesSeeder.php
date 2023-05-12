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


        $role_eagle_inbound = DB::table('roles')->where('descricao', '=', 'eagle_inbound_admin')->first();
        $roles_eagle_inbound = DB::table('roles')->where('descricao', 'like', 'eagle_inbound_%')->get();
        foreach ($roles_eagle_inbound as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_eagle_inbound->id,
                'role_children' => $role->id
            ]);
        }

        $role_gate = DB::table('roles')->where('descricao', '=', 'gate_admin')->first();
        $roles_gate = DB::table('roles')->where('descricao', 'like', 'gate_%')->get();
        foreach ($roles_gate as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_gate->id,
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



        $role_Acompan = DB::table('roles')->where('descricao', '=', 'Acompanhamento_admin')->first();
        $roles_Acompan = DB::table('roles')->where('descricao', 'like', 'Acompanhamento_%')->get();
        foreach ($roles_Acompan as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_Acompan->id,
                'role_children' => $role->id
            ]);
        }

        $role_Shipping = DB::table('roles')->where('descricao', '=', 'Shipping_admin')->first();
        $roles_Shipping = DB::table('roles')->where('descricao', 'like', 'Shipping_%')->get();
        foreach ($roles_Shipping as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_Shipping->id,
                'role_children' => $role->id
            ]);
        }

        $role_Saga = DB::table('roles')->where('descricao', '=', 'Saga_admin')->first();
        $roles_Saga = DB::table('roles')->where('descricao', 'like', 'Saga_%')->get();
        foreach ($roles_Saga as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_Saga->id,
                'role_children' => $role->id
            ]);
        }


        $role_Sla = DB::table('roles')->where('descricao', '=', 'Sla_admin')->first();
        $roles_Sla = DB::table('roles')->where('descricao', 'like', 'Sla_%')->get();
        foreach ($roles_Sla as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_Sla->id,
                'role_children' => $role->id
            ]);
        }


        $role_Hatmap = DB::table('roles')->where('descricao', '=', 'heatmap_admin')->first();
        $roles_Heatmap = DB::table('roles')->where('descricao', 'like', 'heatmap_%')->get();
        foreach ($roles_Heatmap as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_Hatmap->id,
                'role_children' => $role->id
            ]);
        }


        $role_nove = DB::table('roles')->where('descricao', '=', 'nove_admin')->first();
        $roles_nove = DB::table('roles')->where('descricao', 'like', 'nove_%')->get();
        foreach ($roles_nove as $key => $role) {

            RoleRoles::updateOrCreate([

                'role' => $role_nove->id,
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


        // $role_eagleOut = DB::table('roles')->where('descricao', '=', 'eagle_outbound_admin')->first();
        // $roles_eagleOut = DB::table('roles')->where('descricao', 'like', 'eagle_outbound_%')->get();
        // foreach ($roles_eagleOut as $key => $role) {

        //     RoleRoles::updateOrCreate([

        //         'role' => $role_eagleOut->id,
        //         'role_children' => $role->id
        //     ]);
        // }
    }
}
