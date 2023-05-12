<?php

namespace App\Models;

use App\config\ConnectionString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class atualizacao extends Model
{
    use HasFactory;

    protected $fillable = ['horario_atualizacao', 'unidade'];

    // protected $connection = ConnectionString::heatmap_shipping;
    protected $connection = 'heatmap';
}
