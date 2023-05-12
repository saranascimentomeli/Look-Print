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

        $sonar = Route::UpdateOrCreate(
            [
                'path' => 'Sonar',
                'title' => 'Sonar',
                'icon' => 'lens_blur',
                'class' => '',
            ]
        );

        $usuario = Route::UpdateOrCreate(
            [
                'path' => 'Usuarios',
                'title' => 'Gestão de usuários',
                'icon' => 'person',
                'class' => '',
            ]
        );

        $eagle = Route::UpdateOrCreate(
            [
                'path' => 'Eagle',
                'title' => 'Eagle',
                'icon' => 'qr_code_scanner',
                'class' => '',
            ]
        );

        $gate = Route::UpdateOrCreate(
            [
                'path' => 'Gate',
                'title' => 'Gate',
                'icon' => 'fire_truck',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'gate/guiche'
            ],
            [
                'title' => 'Guiche',
                'icon' => 'nest_display',
                'class' => '',
                'father' => $gate->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'gate/call-guiche'
            ],
            [
                'title' => 'Chamar Guiche',
                'icon' => 'mfg_nest_yale_lock',
                'class' => '',
                'father' => $gate->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/armazenar'
            ],
            [
                'title' => 'Armazenar',
                'icon' => 'archive',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/remover-eagle'
            ],
            [
                'title' => 'Remover do endereço',
                'icon' => 'cancel_presentation',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/cores-eagle'
            ],
            [
                'title' => 'Cores Eagle',
                'icon' => 'palette',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/buffer-stagein'
            ],
            [
                'title' => 'Buffer Stagein',
                'icon' => 'dashboard',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/cadastro-buffer'
            ],
            [
                'title' => 'Cadastro Buffer',
                'icon' => 'add_box',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/transferir'
            ],
            [
                'title' => 'Transferir',
                'icon' => 'compare_arrows',
                'class' => '',
                'father' => $eagle->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'eagle-inbound/relatorio'
            ],
            [
                'title' => 'Relatório',
                'icon' => 'analytics',
                'class' => '',
                'father' => $eagle->id,
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

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/atualizarBase'
            ],
            [
                'title' => 'Atualizar Base',
                'icon' => 'system_update',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/config-aderencia'
            ],
            [
                'title' => 'Configuração aderência',
                'icon' => 'tune',
                'class' => '',
                'father' => $sonar->id,
            ]
        );


        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'sonar/selecaoZonas'
        //     ],
        //     [
        //         'title' => 'Seleção de zonas',
        //         'icon' => 'offline_pin',
        //         'class' => '',
        //         'father' => $sonar->id,
        //     ]
        // );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/selecaoZonasNiveis'
            ],
            [
                'title' => 'Seleção de zonas',
                'icon' => 'offline_pin',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/indisponibilizar'
            ],
            [
                'title' => 'Indisponibilizar Zonas',
                'icon' => 'offline_pin',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'sonar/zonasPutaway'
        //     ],
        //     [
        //         'title' => 'Zonas para Putaway',
        //         'icon' => 'archive',
        //         'class' => '',
        //         'father' => 1,
        //     ]
        // );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/niveisPutaway'
            ],
            [
                'title' => 'Putaway',
                'icon' => 'archive',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/usuarioSonar'
            ],
            [
                'title' => 'Usuário Sonar',
                'icon' => 'person',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'sonar/configColor'
            ],
            [
                'title' => 'Configuração cores segmentos',
                'icon' => 'tune',
                'class' => '',
                'father' => $sonar->id,
            ]
        );

        Route::UpdateOrCreate(
            ['path' => 'sonar/configColorApp'],
            [
                'title' => 'Configuração cores App',
                'icon' => 'settings',
                'class' => '',
                'father' => $sonar->id,
            ]
        );



        $Acompan = Route::UpdateOrCreate(
            [
                'path' => 'Acompanhamento',
                'title' => 'Pole',
                'icon' => 'auto_graph',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Acompanhamento/Representantes'
            ],
            [
                'title' => 'Representantes',
                'icon' => 'rocket_launch',
                'class' => '',
                'father' => $Acompan->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Acompanhamento/Equipe'
            ],
            [
                'title' => 'Equipe',
                'icon' => 'data_thresholding',
                'class' => '',
                'father' => $Acompan->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Acompanhamento/MapaCad'
            ],
            [
                'title' => 'Mapa Cad',
                'icon' => 'groups',
                'class' => '',
                'father' => $Acompan->id,
            ]
        );


        $shipping = Route::UpdateOrCreate(
            [
                'path' => 'Shipping',
                'title' => 'Hubble',
                'icon' => 'app_shortcut',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Shipping/ConsultaCat'
            ],
            [
                'title' => 'ConsultaCat',
                'icon' => 'groups',
                'class' => '',
                'father' => $shipping->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Shipping/inputm'
            ],
            [
                'title' => 'Input (Manual)',
                'icon' => 'input',
                'class' => '',
                'father' => $shipping->id,
            ]
        );




        $saga = Route::UpdateOrCreate(
            [
                'path' => 'Saga',
                'title' => 'Fenix',
                'icon' => 'remove_red_eye',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Saga/Gerenciamento'
            ],
            [
                'title' => 'Gerenciamento',
                'icon' => 'travel_explore',
                'class' => '',
                'father' => $saga->id,
            ]
        );


        $sla = Route::UpdateOrCreate(
            [
                'path' => 'Sla',
                'title' => 'Sla Plus',
                'icon' => 'alarm_on',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Sla/Gerenciamento'
            ],
            [
                'title' => 'Gerenciamento',
                'icon' => 'remove_red_eye',
                'class' => '',
                'father' => $sla->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Sla/Horacorte'
            ],
            [
                'title' => 'Horacorte',
                'icon' => 'groups',
                'class' => '',
                'father' => $sla->id,
            ]
        );


        Route::UpdateOrCreate(
            [
                'path' => 'Sla/Perguntas'
            ],
            [
                'title' => 'Perguntas',
                'icon' => 'question_mark',
                'class' => '',
                'father' => $sla->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Sla/HistoricoResult'
            ],
            [
                'title' => 'Relatório de Resultados',
                'icon' => 'receipt_long',
                'class' => '',
                'father' => $sla->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'Sla/HistoricoJusti'
            ],
            [
                'title' => 'Relatório de Justificativas',
                'icon' => 'list_alt',
                'class' => '',
                'father' => $sla->id,
            ]
        );




        $heatmap = Route::UpdateOrCreate(
            [
                'path' => 'heatmap',
                'title' => 'Heatmap',
                'icon' => 'app_registration',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'heatmap/heatmap-atrelamento-tl'
            ],
            [
                'title' => 'Heatmap TL',
                'icon' => 'drag_indicator',
                'class' => '',
                'father' => $heatmap->id,
            ]
        );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'heatmap/heatmap-atrelamento'
        //     ],
        //     [
        //         'title' => 'heatmap TV',
        //         'icon' => 'dataset',
        //         'class' => '',
        //         'father' => $heatmap->id,
        //     ]
        // );


        Route::UpdateOrCreate(
            [
                'path' => 'heatmap/cadastro-flowrack'
            ],
            [
                'title' => 'Cadastro Flow',
                'icon' => 'rebase_edit',
                'class' => '',
                'father' => $heatmap->id,
            ]
        );

        $nove = Route::UpdateOrCreate(
            [
                'path' => 'nove',
                'title' => '9¾ Plus',
                'icon' => 'railway_alert',
                'class' => '',
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'nove/Gerenciamento'
            ],
            [
                'title' => 'Gerenciamento',
                'icon' => ' model_training',
                'class' => '',
                'father' => $nove->id,
            ]
        );

        Route::UpdateOrCreate(
            [
                'path' => 'nove/bipdoca'
            ],
            [
                'title' => 'Bipar Doca',
                'icon' => 'on_device_training',
                'class' => '',
                'father' => $nove->id,
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

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'look/Gerenciamento'
        //     ],
        //     [
        //         'title' => 'Look',
        //         'icon' => 'find_in_page',
        //         'class' => '',
        //         'father' => $look->id,
        //     ]
        // );

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

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'look/cadban'
        //     ],
        //     [
        //         'title' => 'Bancadas',
        //         'icon' => 'table_restaurant',
        //         'class' => '',
        //         'father' => $look->id,
        //     ]
        // );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'heatmap/tempos-flowrack'
        //     ],
        //     [
        //         'title' => 'Cadastro Temos',
        //         'icon' => 'cycle',
        //         'class' => '',
        //         'father' => $heatmap->id,
        //     ]
        // );



        // $elagleOut = Route::UpdateOrCreate(
        //     [
        //         'path' => 'eagle-outbound',
        //         'title' => 'EAGLE',
        //         'icon' => 'apps_outage',
        //         'class' => '',
        //     ]
        // );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'eagle-outbound/armazenar-outbound'
        //     ],
        //     [
        //         'title' => 'Armazenar',
        //         'icon' => 'move_down',
        //         'class' => '',
        //         'father' => $elagleOut->id,
        //     ]
        // );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'eagle-outbound/remover-endereco'
        //     ],
        //     [
        //         'title' => 'Remover do Endereço',
        //         'icon' => 'restore_from_trash',
        //         'class' => '',
        //         'father' => $elagleOut->id,
        //     ]
        // );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'eagle-outbound/consulta-etd'
        //     ],
        //     [
        //         'title' => 'Consulta ETD',
        //         'icon' => 'youtube_searched_for',
        //         'class' => '',
        //         'father' => $elagleOut->id,
        //     ]
        // );

        // Route::UpdateOrCreate(
        //     [
        //         'path' => 'eagle-outbound/heatmap-outbound'
        //     ],
        //     [
        //         'title' => 'EAGLE',
        //         'icon' => 'view_cozy',
        //         'class' => '',
        //         'father' => $elagleOut->id,
        //     ]
        // );
    }
}
