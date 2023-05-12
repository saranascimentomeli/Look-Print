<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbprocessos extends Model
{
    use HasFactory;
    protected $table = 'tbprocessos';
    protected $fillable = ['processo', 'meta', 'cad'];
}
