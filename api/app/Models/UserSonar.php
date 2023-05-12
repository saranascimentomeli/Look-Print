<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSonar extends Model
{
    use HasFactory;

    protected $fillable = ['user','created_by', 'cad', 'timeout'];
}
