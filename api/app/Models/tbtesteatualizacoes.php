<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbtesteatualizacoes extends Model
{
    use HasFactory;
    protected $table = 'tbtesteatualizacoes';
    protected $fillable = ['processo', 'data', 'cad', 'unidades', 'QtdeReps', 'HorasEmProcesso', 'HorasEfetivas', 'Produtividadeliquida', 'ProdutividadeEfetiva', 'utilizacao', 'Horasdeociosidade', 'horaAtualizacao'];
}
