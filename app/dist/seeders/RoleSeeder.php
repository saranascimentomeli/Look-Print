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

        $modulo_gate = DB::table('modulos')->where('descricao', '=', 'Gate')->first();
        Role::UpdateOrCreate([


            'descricao' => 'gate_admin',
            'modulo' => $modulo_gate->id
        ]);

        Role::UpdateOrCreate([


            'descricao' => 'gate_viwer',
            'modulo' => $modulo_gate->id
        ]);

        $modulo_eagle_inbound = DB::table('modulos')->where('descricao', '=', 'Eagle inbound')->first();
        Role::UpdateOrCreate([


            'descricao' => 'eagle_inbound_admin',
            'modulo' => $modulo_eagle_inbound->id
        ]);

        Role::UpdateOrCreate([


            'descricao' => 'eagle_inbound_operador',
            'modulo' => $modulo_eagle_inbound->id
        ]);

        Role::UpdateOrCreate([


            'descricao' => 'eagle_inbound_ps',
            'modulo' => $modulo_eagle_inbound->id
        ]);

        $modulo_sonar = DB::table('modulos')->where('descricao', '=', 'Gerenciamento Usuários')->first();
        Role::UpdateOrCreate([


            'descricao' => 'user_manage',
            'modulo' => $modulo_sonar->id
        ]);

        $modulo_sonar = DB::table('modulos')->where('descricao', '=', 'Sonar')->first();
        Role::UpdateOrCreate([


            'descricao' => 'sonar_operador',
            'modulo' => $modulo_sonar->id
        ]);

        Role::UpdateOrCreate([


            'descricao' => 'sonar_tl',
            'modulo' => $modulo_sonar->id
        ]);

        Role::UpdateOrCreate([


            'descricao' => 'sonar_admin',
            'modulo' => $modulo_sonar->id
        ]);


        $modulo_Acompan = DB::table('modulos')->where('descricao', '=', 'Acompanhamento')->first();
        Role::UpdateOrCreate([


            'descricao' => 'Acompanhamento_admin',
            'modulo' => $modulo_Acompan->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'Acompanhamento_operador',
            'modulo' => $modulo_Acompan->id
        ]);



        $modulo_Shipping = DB::table('modulos')->where('descricao', '=', 'Shipping')->first();
        Role::UpdateOrCreate([


            'descricao' => 'Shipping_admin',
            'modulo' => $modulo_Shipping->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'Shipping_operador',
            'modulo' => $modulo_Shipping->id
        ]);


        $modulo_Saga = DB::table('modulos')->where('descricao', '=', 'Saga')->first();
        Role::UpdateOrCreate([


            'descricao' => 'Saga_admin',
            'modulo' => $modulo_Saga->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'Saga_operador',
            'modulo' => $modulo_Saga->id
        ]);




        $modulo_Sla = DB::table('modulos')->where('descricao', '=', 'Sla')->first();
        Role::UpdateOrCreate([


            'descricao' => 'Sla_admin',
            'modulo' => $modulo_Sla->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'Sla_operador',
            'modulo' => $modulo_Sla->id
        ]);


        $modulo_heatmap = DB::table('modulos')->where('descricao', '=', 'heatmap')->first();
        Role::UpdateOrCreate([


            'descricao' => 'heatmap_admin',
            'modulo' => $modulo_heatmap->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'heatmap_operador',
            'modulo' => $modulo_heatmap->id
        ]);


        $modulo_nove = DB::table('modulos')->where('descricao', '=', 'nove')->first();
        Role::UpdateOrCreate([

            'descricao' => 'nove_admin',
            'modulo' => $modulo_nove->id
        ]);

        Role::UpdateOrCreate([

            'descricao' => 'nove_operador',
            'modulo' => $modulo_heatmap->id
        ]);


        $modulo_look = DB::table('modulos')->where('descricao', '=', 'look')->first();
        Role::UpdateOrCreate([

            'descricao' => 'look_admin',
            'modulo' => $modulo_look->id
        ]);



        // $modulo_eagle_outbound = DB::table('modulos')->where('descricao', '=', 'Eagle Outbound')->first();
        // Role::UpdateOrCreate([


        //     'descricao' => 'eagle_outbound_admin',
        //     'modulo' => $modulo_eagle_outbound->id
        // ]);

        // Role::UpdateOrCreate([

        //     'descricao' => 'eagle_outbound_operador',
        //     'modulo' => $modulo_eagle_outbound->id
        // ]);
    }
}
