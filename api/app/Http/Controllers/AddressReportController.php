<?php

namespace App\Http\Controllers;

use App\Models\AddressReport;
use App\Models\Cad;
use Exception;
use Facade\FlareClient\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class AddressReportController extends Controller
{

    public function UpdateBaseAddress(Request $request)
    {

        try {

            ini_set('memory_limit', '4095M');
            $time_start = microtime(true); 
            set_time_limit(0);
            $request->validate([

                'file' => 'required|mimes:csv,txt',
                'cad' => 'required'
            ]);

            $cad = Cad::where('unidade', '=', $request->cad)->firstOrFail();

            $file = $request->file('file');

            $file->move(public_path('uploads'), $file->getClientOriginalName());

            $filepath = public_path('uploads' . "/" . $file->getClientOriginalName());

            $delimiter = Controller::detectDelimiter($filepath);
            $handle = fopen($filepath, 'r');


            for ($i = 0; $row = fgetcsv($handle, 0, $delimiter); ++$i) {

                if ($i > 0) {

                    $array_insert[] = [

                        'address' => $row[0],
                        'nivel' => substr($row[0], 0, 4),
                        'inventory_id' => $row[1],
                        'quantidade_disponivel' => intval($row[2]),
                        'quantidade_reservada' => intval($row[3]),
                        'quantidade_total' => intval($row[4]),
                        // 'ultima_atualizacao' => $row[5],
                        'cad' => $cad->id
                    ];
                }
            }

            unlink($filepath);

            $chunks = array_chunk($array_insert, 10);

            DB::transaction(function () use ($chunks, $cad) {


                DB::table('address_reports')->where('cad', '=', $cad->id)->delete();
                // DB::table('address_reports')->where('cad', '=', $cad->id);

                foreach ($chunks as $chunk) {
                    AddressReport::insert($chunk);
                }

                DB::select('call fill_mirror_nivel(?)',array($cad->id));
                DB::select('call fill_mirror_zonas(?)',array($cad->id));
                DB::select('call fill_mirror_zonas(?)',array($cad->id));
            }, 5);

            $time_end = microtime(true);
            $execution_time = ($time_end - $time_start);

            

            return Response()->json(['message' => $execution_time]);

        } catch (ValidationException $th) {

            return response()->json(['message' => $th->getMessage()], 405);
        } catch (ModelNotFoundException $th) {

            return response()->json(['message' => $th->getMessage()], 404);
        } catch (Exception $e) {

            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
