<?php

namespace Database\Seeders;

use App\Models\UsersRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersRoles extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->SeedRoleSonarInventario();
        $this->SeedRoleSonarTl();
        $this->SeedRoleSonarAmin();
        $this->SeedRoleEagleInbound();
        $this->SeedRoleAcompanharAmin();
        $this->SeedRoleShippingAmin();
        $this->SeedRoleSagaAmin();
        $this->SeedRoleSlaAmin();
    }

    private function SeedRoleSonarInventario()
    {

        $user = DB::table('users')->where('email', '=', 'inventario@mercadolivre.com')->first();

        $roles = DB::table('roles')->whereIn('descricao', ['sonar_admin', 'user_manage'])->get();

        foreach ($roles as $k => $role) {

            UsersRole::UpdateOrCreate([

                'user' => $user->id,
                'role' => $role->id
            ]);
        }
    }

    private function SeedRoleEagleInbound()
    {

        $user = DB::table('users')->where('email', '=', 'eagle_inbound@mercadolivre.com')->first();

        $roles = DB::table('roles')->whereIn('descricao', ['eagle_inbound_admin', 'user_manage'])->get();

        foreach ($roles as $k => $role) {

            UsersRole::UpdateOrCreate([

                'user' => $user->id,
                'role' => $role->id
            ]);
        }
    }

    private function SeedRoleSonarTl()
    {

        $user = DB::table('users')->where('email', '=', 'tl@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'sonar_tl')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }

    private function SeedRoleSonarAmin()
    {

        $user = DB::table('users')->where('email', '=', 'paulo.leite@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }


    private function SeedRoleAcompanharAmin()
    {

        $user = DB::table('users')->where('email', '=', 'Acompanhamento@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }

    private function SeedRoleShippingAmin()
    {

        $user = DB::table('users')->where('email', '=', 'Shipping@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }


    private function SeedRoleSagaAmin()
    {

        $user = DB::table('users')->where('email', '=', 'Saga@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }

    private function SeedRoleSlaAmin()
    {

        $user = DB::table('users')->where('email', '=', 'Sla@mercadolivre.com')->first();

        $role = DB::table('roles')->where('descricao', '=', 'admin')->first();

        UsersRole::UpdateOrCreate([

            'user' => $user->id,
            'role' => $role->id
        ]);
    }
}
