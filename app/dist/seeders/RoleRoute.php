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
        $this->SeedSonarTl();
        $this->SeedSonarOperador();
        $this->SeedSonarInventario();
        $this->SeedGerenciamentoUsuario();
        $this->SeedeEagle();
        $this->SeedGate();

        $this->SeedAcompanhamento();
        $this->SeedAcompanhamentoOperador();


        $this->SeedShipping();
        $this->SeedShippingOperador();



        $this->SeedSaga();
        $this->SeedSagaOperador();

        $this->SeedSla();
        $this->SeedSlaOperador();

        $this->SeedHeatmap();
        $this->SeedHeatmapOperador();

        $this->SeedeEagleOut();

        $this->SeedNove();
        $this->SeedNoveOperador();

        $this->Seedlook();
    }

    private function SeedSonarInventario()
    {

        $role = DB::table('roles')->where('descricao', '=', 'sonar_admin')->first();

        $path = ['Sonar', 'sonar/niveisPutaway', 'sonar/atualizarBase', 'sonar/selecaoZonasNiveis', 'sonar/usuarioSonar', 'sonar/configColor', 'sonar/configColorApp'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedGate()
    {

        $role = DB::table('roles')->where('descricao', '=', 'gate_admin')->first();

        $path = ['Gate', 'gate/guiche', 'gate/call-guiche'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }

        $role = DB::table('roles')->where('descricao', '=', 'gate_viwer')->first();

        $path = ['Gate', 'gate/guiche'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedeEagle()
    {

        $role = DB::table('roles')->where('descricao', '=', 'eagle_inbound_admin')->first();

        $path = ['Eagle', 'eagle-inbound/armazenar', 'eagle-inbound/cores-eagle', 'eagle-inbound/transferir', 'eagle-inbound/relatorio', 'eagle-inbound/cadastro-buffer', 'eagle-inbound/buffer-putaway', 'eagle-inbound/remover-eagle', 'eagle-inbound/buffer-stagein'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }

        $role = DB::table('roles')->where('descricao', '=', 'eagle_inbound_operador')->first();

        $path = ['Eagle', 'eagle-inbound/armazenar', 'eagle-inbound/transferir', 'eagle-inbound/remover-eagle'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }

        $role = DB::table('roles')->where('descricao', '=', 'eagle_inbound_ps')->first();

        $path = ['Eagle', 'eagle-inbound/buffer-stagein', 'eagle-inbound/relatorio'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }



    private function SeedSonarTl()
    {

        $role = DB::table('roles')->where('descricao', '=', 'sonar_tl')->first();

        $path = ['Sonar', 'sonar/selecaoZonasNiveis', 'sonar/usuarioSonar'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedSonarOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'sonar_operador')->first();

        $path = ['Sonar', 'sonar/niveisPutaway'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedGerenciamentoUsuario()
    {

        $role = DB::table('roles')->where('descricao', '=', 'user_manage')->first();

        $path = ['Usuarios', 'usuarios/gerenciamento'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
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


    private function SeedAcompanhamento()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Acompanhamento_admin')->first();

        $path = ['Acompanhamento', 'Acompanhamento/Representantes', 'Acompanhamento/Equipe'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedAcompanhamentoOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Acompanhamento_operador')->first();

        $path = ['Acompanhamento', 'Acompanhamento/Representantes'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }




    private function SeedShipping()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Shipping_admin')->first();

        $path = ['Shipping', 'Shipping/ConsultaCat', 'Shipping/inputm'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedShippingOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Shipping_operador')->first();

        $path = ['Shipping', 'Shipping/ConsultaCat'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }




    private function SeedSaga()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Saga_admin')->first();

        $path = ['Saga', 'Saga/Gerenciamento'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedSagaOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Saga_operador')->first();

        $path = ['Saga', 'Saga/Gerenciamento'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }



    private function SeedSla()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Sla_admin')->first();

        $path = ['Sla', 'Sla/Gerenciamento', 'Sla/Horacorte', 'Sla/Perguntas', 'Sla/HistoricoResult', 'Sla/HistoricoJusti'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }


    private function SeedSlaOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'Sla_operador')->first();

        $path = ['Sla', 'Sla/Gerenciamento'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }




    private function SeedHeatmap()
    {

        $role = DB::table('roles')->where('descricao', '=', 'heatmap_admin')->first();

        $path = ['heatmap', 'heatmap/heatmap-atrelamento-tl', 'heatmap/cadastro-flowrack'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }


    private function SeedHeatmapOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'heatmap_operador')->first();

        $path = ['heatmap', 'heatmap/heatmap-atrelamento-tl'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }


    private function SeedeEagleOut()
    {

        // $role = DB::table('roles')->where('descricao', '=', 'eagle_outbound_admin')->first();

        // $path = ['Eagle', 'eagle-outbound/armazenar-outbound   ', 'eagle-outbound/remover-endereco', 'eagle-outbound/consulta-etd', 'eagle-outbound/heatmap-outbound'];

        // $routes = DB::table('routes')->whereIn('path', $path)->get();

        // foreach ($routes as $key => $value) {

        //     RolesRoute::updateOrCreate([

        //         'role' => $role->id,
        //         'route' => $value->id
        //     ]);
        // }

        // $role = DB::table('roles')->where('descricao', '=', 'eagle_outbound_operador')->first();

        // $path = ['Eagle', 'eagle-outbound/heatmap-outbound'];

        // $routes = DB::table('routes')->whereIn('path', $path)->get();

        // foreach ($routes as $key => $value) {

        //     RolesRoute::updateOrCreate([

        //         'role' => $role->id,
        //         'route' => $value->id
        //     ]);
        // }
    }


    private function SeedNove()
    {

        $role = DB::table('roles')->where('descricao', '=', 'nove_admin')->first();

        $path = ['nove', 'nove/Gerenciamento', 'nove/bipdoca'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

        foreach ($routes as $key => $value) {

            RolesRoute::updateOrCreate([

                'role' => $role->id,
                'route' => $value->id
            ]);
        }
    }

    private function SeedNoveOperador()
    {

        $role = DB::table('roles')->where('descricao', '=', 'nove_operador')->first();

        $path = ['nove', 'nove/bipdoca'];

        $routes = DB::table('routes')->whereIn('path', $path)->get();

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
