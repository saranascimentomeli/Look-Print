<?php

namespace App\Models;

use App\config\ConnectionString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cad extends Model
{
    use HasFactory;
    protected $table = 'cads';
    protected $fillable = ['id', 'unidade', 'active'];
    //protected $connection = ConnectionString::heatmap_shipping;
}
