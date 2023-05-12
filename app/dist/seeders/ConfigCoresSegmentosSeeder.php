<?php

namespace Database\Seeders;

use App\Models\ConfigCoresSegmento;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConfigCoresSegmentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $segmentos = DB::table('sonar_enderecos')->groupBy('segmento')->get('segmento');

        foreach ($segmentos as $k => $v) {
            
            ConfigCoresSegmento::updateOrCreate(

                ['segmento' => $v->segmento],
                ['hex' => '']
            );
        }
    }
}
