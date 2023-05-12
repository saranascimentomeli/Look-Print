<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tblookconfig extends Model
{
    use HasFactory;
    protected $table = 'tblookconfig';
    protected $fillable = ['ip', 'codigo', 'status', 'potencia', 'velocidade', 'Cad', 'descricao'];
}
