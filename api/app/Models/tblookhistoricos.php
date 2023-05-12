<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tblookhistoricos extends Model
{
    use HasFactory;
    protected $table = 'tblookhistoricos';
    protected $fillable = ['idRegistro', 'TipoParada', 'inicio', 'fim', 'TotalSegundos', 'cad'];

   
}
