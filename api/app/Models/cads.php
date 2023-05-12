<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cads extends Model
{
    use HasFactory;
    protected $table = 'cads';
    protected $fillable = ['id', 'unidade', 'active'];
}
