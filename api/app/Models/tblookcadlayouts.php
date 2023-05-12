<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tblookcadlayouts extends Model
{
    use HasFactory;
    protected $table = 'tblookcadlayouts';
    protected $fillable = ['descricao', 'layoutFoto', 'cad'];
}
