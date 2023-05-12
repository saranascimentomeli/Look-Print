<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tblookbancadas extends Model
{
    use HasFactory;
    protected $table = 'tblookbancadas';
    protected $fillable = ['Layout', 'Bancada', 'Impressora', 'CoordX', 'CoordY', 'Cad', 'usuario'];
}
