<?php

namespace App\Models;

use App\config\ConnectionString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class impresora extends Model
{
    use HasFactory;
    protected $table = 'tblookcadimpes';
    protected $fillable = ['id', 'ip', 'impressora', 'cad'];


    //protected $connection = ConnectionString::heatmap_shipping;
}
