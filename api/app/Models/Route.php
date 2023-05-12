<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Route extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function GetModulo()
    {
        return $this->belongsTo(Modulo::class, 'modulo');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_routes', 'route', 'role');
    }
}
