<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\slaplus;
use App\Models\slahoradecortes;
use App\Models\tbatualizacoes;
use App\Models\slahoradecortes as ModelsDashboard;
use App\Models\slaperguntas;
use App\Models\slajustificativas;
use App\Models\tblookcadlayouts;
use App\Models\tblookbancadas;
use App\Models\tblookconfig;
use App\Models\impresora;
use Exception;
use Facade\FlareClient\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use \stdClass;
use DateTime;
use LengthException;
use DateTimeZone;
use GuzzleHttp\Client;
use function PHPUnit\Framework\isNull;
use function PHPUnit\Framework\returnSelf;
use Sunra\PhpSimple\HtmlDomParser;


class lookController extends Controller
{

    public function BuscarIP(Request $request)
    {


        $myArray[] = [];
        $int = 0;
        try {

            $lista = DB::table('tblookcadimpes')
                ->where(
                    'tblookcadimpes.cad',
                    '=',
                    $request->cad
                )
                ->get();



            foreach ($lista as $item) {
                $int++;
                $url = "http://" . $item->ip . "/index.html";
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 3); // adiciona um timeout de 10 segundos
                $response = curl_exec($ch);
                curl_close($ch);

                // Exibe o conteúdo da resposta
                //echo $response;
                $Texto = strval($response);
                $StringInicio = "<TITLE>";
                $StringFim = "</TITLE>";
                //echo  $Texto;
                $inicio = strpos($Texto, $StringInicio);
                $fim = strpos($Texto, $StringFim) - $inicio;
                //str_replace("world","Peter","Hello world!")

                $textoFinal = str_replace($StringInicio, "", substr($Texto, $inicio, $fim));
                //echo $textoFinal;

                try {
                    $Empressora = explode("-",  $textoFinal)[0];
                } catch (\Throwable $th) {
                    $Empressora = '';
                }

                try {
                    $Status = explode("-",  $textoFinal)[1];
                } catch (\Throwable $th) {
                    $Status = '';
                }


                $StringInicio = "<H3><FONT COLOR=RED>";
                $StringFim = "<BR>";
                // echo  $Texto;
                $inicio = strpos($Texto, $StringInicio);
                // $fim = strpos($Texto, $StringFim) - $inicio;

                $textoFinal = str_replace($StringInicio, "", substr($Texto, $inicio, 50));

                $fim = strpos($textoFinal, $StringFim) - strlen($textoFinal);
                $textoFinal = str_replace($StringInicio, "", substr($textoFinal, 0,  $fim));
                // $StringFim = "";


                //echo $textoFinal;
                $objgeral = new StdClass;
                $objgeral->id = $int;
                $objgeral->ip =  $item->ip;
                $objgeral->impressora =  str_replace(" ", "", $Empressora);
                $objgeral->Status = str_replace(" ", "", $Status);
                $objgeral->Descricao = utf8_encode($textoFinal);

                if ($objgeral->Descricao == '')
                    $objgeral->Descricao = 'Em Aguardo';

                $url = "http://" . $item->ip . "/config.html";
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_TIMEOUT, 3); // adiciona um timeout de 10 segundos
                $response = curl_exec($ch);
                curl_close($ch);

                $StringInicio = "<TITLE>";
                $StringFim = "</TITLE>";

                $Texto = strval($response);
                $StringInicio = "<PRE>";
                $StringFim = "</PRE>";

                //echo  $Texto;
                $inicio = strpos($Texto, $StringInicio);
                $fim = strpos($Texto, $StringFim) - $inicio;
                //str_replace("world","Peter","Hello world!")

                $textoFinal = str_replace($StringInicio, "", substr($Texto, $inicio, $fim));

                $linha = explode("\r\n", utf8_encode($textoFinal))[1];
                //echo $textoFinal;


                $objgeral->Potencia = explode(" ", $linha)[2];
                $objgeral->DescPotencia =  explode(" ", $linha)[17];


                $linha = explode("\r\n", utf8_encode($textoFinal))[65];
                $objgeral->Tamanho = $linha;



                array_push($myArray, $objgeral);
            }

            array_shift($myArray);
            return Response()->json($myArray);


            //$content = $response->getBody()->getContents();
        } catch (ValidationException $th) {

            return response()->json(['message' => $th->getMessage()], 405);
        } catch (ModelNotFoundException $th) {

            return response()->json(['message' => $th->getMessage()], 404);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()]);
        }
    }

    public function GetImpressora(Request $request)
    {

        $lista = DB::table('tblookcadimpes')
            ->where(
                'tblookcadimpes.cad',
                '=',
                $request->cad
            )
            ->get();

        return response()->json($lista);
    }

    public function deleteImpressora(Request $request)
    {
        try {

            $request->validate([
                'look' => 'required'
            ]);

            $sla = json_decode($request->look);
            $sla_delete = impresora::findOrFail($sla->id);
            $sla_delete->delete();
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }

    public function SaveImpressora(Request $request)
    {

        try {
            $request->validate([
                'look' => 'required'
            ]);


            $sla_post = json_decode($request->look);
            //return response($request->sla);

            if (!isset($sla_post->ip) || !isset($sla_post->impressora))
                return response("{'error' : 'Colaborador not found'}", 404);

            if (isset($sla_post->id)) {

                $slas = impresora::updateOrCreate(
                    ['id' => $sla_post->id],
                    [
                        'ip' => $sla_post->ip,
                        'impressora' => $sla_post->impressora,
                        'cad' => $sla_post->cad
                    ]
                );
            } else {

                $slas = impresora::updateOrCreate(

                    [
                        'ip' => $sla_post->ip,
                        'impressora' => $sla_post->impressora,
                        'cad' => $sla_post->cad
                    ]

                );
            }
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }

    public function GetBancadas(Request $request)
    {

        // $lista = DB::table('tblookbancadas')
        //     ->leftJoin('tblookconfig', 'tblookbancadas.Impressora', '=', 'tblookconfig.ip')
        //     ->where([
        //         ['tblookbancadas.cad', '=', $request->cad],
        //         ['tblookbancadas.Layout', '=', $request->layout]
        //     ])
        //     ->select('tblookbancadas.*', 'tblookconfig.status', 'tblookconfig.potencia', 'tblookconfig.velocidade', 'tblookconfig.descricao')
        //     ->get();

        // $dataInicio = date('Y-m-d 00:00:00');
        // $dataFim = date('Y-m-d 23:59:59');

        // $hitoricoparada = DB::table('tblookhistoricos')
        //     ->where('cad', '=', 'brsp04')
        //     ->whereBetween('data', [$dataInicio, $dataFim])
        //     ->get();

        // Obter a lista de impressoras
        $impressoras = DB::table('tblookbancadas')
            ->leftJoin('tblookconfig', 'tblookbancadas.Impressora', '=', 'tblookconfig.ip')
            ->where([
                ['tblookbancadas.cad', '=', $request->cad],
                ['tblookbancadas.Layout', '=', $request->layout]
            ])
            ->select('tblookbancadas.*', 'tblookconfig.status', 'tblookconfig.potencia', 'tblookconfig.velocidade', 'tblookconfig.descricao')
            ->get();

        // Obter as paradas correspondentes para cada impressora
        // Obter as paradas correspondentes para cada impressora
        // Obter as paradas correspondentes para cada impressora
        // Obter as paradas correspondentes para cada impressora
        foreach ($impressoras as $impressora) {
            $dataInicio = date('Y-m-d 00:00:00');
            $dataFim = date('Y-m-d 23:59:59');
            $paradas = DB::table('tblookhistoricos')
                ->where('cad', '=', $request->cad)
                ->where('inicio', '>', $dataInicio)
                ->where('fim', '<=', $dataFim)
                ->where('ip', '=', $impressora->Impressora)
                ->get();

            // Calcular o total de horas de parada e contar os tipos de parada
            $horasParadas = 0;
            $tiposParada = [];
            $horasParadasPorTipo = [];

            $paradasPorTipo = $paradas->groupBy('TipoParada');
            $int = 0;
            foreach ($paradasPorTipo as $tipoParada => $paradasDoTipo) {
                $totalHorasParada = 0;
                foreach ($paradasDoTipo as $parada) {
                    // $totalHorasParada += round($parada->TotalSegundos / 3600);
                    $totalHorasParada += $parada->TotalSegundos;
                }

                $horasParadasPorTipo[$int] = $totalHorasParada;
                $tiposParada[$int] = $tipoParada;

                $int++;
            }

            // Adicionar os campos de horas de parada e tipos de parada ao objeto da impressora
            $impressora->horasParadasPorTipo = $horasParadasPorTipo;
            $impressora->tiposParada = $tiposParada;

            // Adicionar a lista de paradas ao objeto da impressora
            $impressora->paradas = $paradas;
        }




        return response()->json($impressoras);
    }

    public function deleteBancadas(Request $request)
    {
        try {

            $request->validate([
                'bancada' => 'required'
            ]);

            $sla = json_decode($request->bancada);
            $sla_delete = tblookbancadas::findOrFail($sla->id);
            $sla_delete->delete();
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }

    public function SaveBancada(Request $request)
    {

        try {
            $request->validate([
                'bancada' => 'required'
            ]);


            $sla_post = json_decode($request->bancada);
            //return response($request->sla);

            if (!isset($sla_post->Layout) || !isset($sla_post->Bancada) || !isset($sla_post->Cad))
                return response("{'error' : 'Colaborador not found'}", 404);

            if (isset($sla_post->id)) {

                $slas = tblookbancadas::updateOrCreate(
                    ['id' => $sla_post->id],
                    [
                        'Layout' => $sla_post->Layout,
                        'Impressora' => $sla_post->Impressora,
                        'Bancada' => $sla_post->Bancada,
                        'CoordX' =>  $sla_post->CoordX,
                        'CoordY' =>  $sla_post->CoordY,
                        'Cad' => $sla_post->Cad,
                        'usuario' => '',
                    ]
                );
            } else {

                $slas = tblookbancadas::updateOrCreate(

                    [
                        'Layout' => $sla_post->Layout,
                        'Impressora' => $sla_post->Impressora,
                        'Bancada' => $sla_post->Bancada,
                        'CoordX' =>  $sla_post->CoordX,
                        'CoordY' =>  $sla_post->CoordY,
                        'Cad' => $sla_post->Cad,
                        'usuario' => '',
                    ]

                );
            }
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }


    public function GetIps(Request $request)
    {

        $lista = DB::table('tblookbancadas')->select('tblookbancadas.Impressora', 'tblookconfig.status')
            ->leftJoin('tblookconfig', 'tblookbancadas.Impressora', '=', 'tblookconfig.ip')
            ->where(
                [
                    ['tblookbancadas.cad', '=', $request->cad],
                    ['tblookbancadas.Impressora', '<>', ''],
                ]

            )
            ->get();

        return response()->json($lista);
    }

    public function UpdateLooks(Request $request)
    {
        //return Response($request->lista);
        date_default_timezone_set('America/Sao_Paulo');
        $time_start = microtime(true);
        set_time_limit(0);
        // Dados recebidos
        //$dados = $request->lista;
        $lista = json_decode($request->lista);

        //return Response()->json($lista);
        // Removendo os colchetes e aspas simples
        // $dados = str_replace(['[', ']', "'"], '', $dados);

        // // Dividindo a string em um array usando a vírgula como separador
        // $lista = explode(',', $dados);

        // Ajustando o array em grupos de 5 elementos cada
        $resultado = [];
        foreach ($lista as $item) {
            // return Response()->json($item);
            $ip = explode(",", $item)[0];
            $codigo = explode(",", $item)[1];
            $status = explode(",", $item)[2];
            $potencia = explode(",", $item)[3];
            $velocidade = explode(",", $item)[4];
            $descricao = explode(",", $item)[5];
            $statusAntes = explode(",", $item)[6];

            $resultado[] = [
                'ip' => $ip,
                'codigo' => $codigo,
                'status' =>  $status,
                'potencia' =>  $potencia,
                'velocidade' => $velocidade,
                'Cad' => $request->cad,
                'descricao' =>  $descricao
            ];


            $registroAnterior = DB::table('tblookhistoricos')
                ->where([
                    ['ip', $ip],
                    ['fim', null]
                ])
                ->orderBy('created_at', 'desc')
                ->first();

            if ($descricao == '')
                $descricao = 'EM PAUSA';


            if ($statusAntes !== $status) {

                if (!$registroAnterior) {

                    DB::table('tblookhistoricos')->insert([
                        'ip' => $ip,
                        'TipoParada' => $descricao,
                        'inicio' => now(),
                        'cad' => $request->cad,
                    ]);
                } else {


                    if ($status == "EM AGUARDO" || $status == "READY") {
                        $horarioFim = now();
                        $diferencaEmSegundos = $horarioFim->diffInSeconds($registroAnterior->inicio);

                        DB::table('tblookhistoricos')
                            ->where('id', $registroAnterior->id)
                            ->update([
                                'fim' => $horarioFim,
                                'TotalSegundos' => $diferencaEmSegundos,
                            ]);
                    }
                }
            }
        }


        $chunks = array_chunk($resultado, 10);

        DB::transaction(function () use ($chunks, $request) {


            DB::table('tblookconfig')->where([
                ['cad', '=', $request->cad],
            ])->delete();

            foreach ($chunks as $chunk) {
                tblookconfig::insert($chunk);
            }
        }, 5);


        $atualizacao = tbatualizacoes::where([
            ['robo', '=', 'look'],
            ['cad', '=', $request->cad]
        ])->first();

        if ($atualizacao !== null) {
            $atualizacao->update(['data' => date("Y-m-d H:i:s")]);
        }

        $time_end = microtime(true);
        $execution_time = ($time_end - $time_start);

        date_default_timezone_set('America/Sao_Paulo');;
        // Exibindo o resultado
        return Response()->json(['message' => $execution_time]);



        // $array_insert2[] = [         
        //     'potencia' => $event_id,
        //     'Velocidade' => $last_event,         
        // ];
        // $lista = DB::table('tblookbancadas')->select('tblookbancadas.Impressora')
        //     ->where(
        //         [
        //             ['tblookbancadas.cad', '=', $request->cad],
        //             ['tblookbancadas.Impressora', '<>', ''],
        //         ]

        //     )
        //     ->get();


    }


    public function savelayout(Request $request)
    {

        try {
            $request->validate([
                'layout' => 'required'
            ]);

            $sla_post = json_decode($request->layout);

            if (!isset($sla_post->descricao) || !isset($sla_post->layoutFoto) || !isset($sla_post->cad))
                return response("{'error' : 'Colaborador not found'}", 404);

            if (isset($sla_post->id)) {

                $slas = tblookcadlayouts::updateOrCreate(
                    ['id' => $sla_post->id],
                    [
                        'descricao' => $sla_post->descricao,
                        'layoutFoto' => $sla_post->layoutFoto,
                        'cad' => $sla_post->cad,
                    ]
                );
            } else {

                $slas = tblookcadlayouts::updateOrCreate(

                    [
                        'descricao' => $sla_post->descricao,
                        'layoutFoto' => $sla_post->layoutFoto,
                        'cad' => $sla_post->cad,
                    ]

                );
            }
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }


    
    public function buscarLay(Request $request)
    {

        $lista = DB::table('tblookcadlayouts')
            ->where(
                [
                    ['tblookcadlayouts.cad', '=', $request->cad],
                ]
            )
            ->get();

        return response()->json($lista);
    }

    public function deleteLayout(Request $request)
    {
        try {

            $request->validate([
                'layout' => 'required'
            ]);

            $sla = json_decode($request->layout);
            $sla_delete = tblookcadlayouts::findOrFail($sla->id);
            $sla_delete->delete();
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 404);
        }
    }


    public function UpdateBancada(Request $request)
    {

        try {
            $request->validate([
                'bancada' => 'required'
            ]);

            $sla_post = json_decode($request->bancada);

            if (!isset($sla_post->Impressora) || !isset($sla_post->Bancada) || !isset($sla_post->Cad))
                return response("{'error' : 'Colaborador not found'}", 404);

            // Seleciona apenas o campo "id" dos registros que correspondem ao valor do campo "Bancada"
            $ids = tblookbancadas::where('Bancada', $sla_post->Bancada)->where('Cad', $sla_post->Cad)->pluck('id');

            // Itera sobre os ids e realiza o update no campo "Impressora" para cada um deles
            foreach ($ids as $id) {
                tblookbancadas::where('id', $id)->update([
                    'Impressora' => $sla_post->Impressora,
                    'Usuario' => $sla_post->Usuario
                ]);
            }

            // Retorna uma mensagem de sucesso
            return response()->json(['message' => 'Dados atualizados com sucesso.'], 200);
        } catch (ModelNotFoundException $err) {

            return response()->json(['message' => $err->getMessage()], 404);
        } catch (ValidationException $err) {

            return response()->json(['message' => $err->getMessage()], 405);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
