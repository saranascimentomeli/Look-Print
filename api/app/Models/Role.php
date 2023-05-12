<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_roles', 'role', 'user');
    }

    public function routes()
    {
        return $this->belongsToMany(Route::class, 'roles_routes', 'role', 'route');
    }

    public function Modulo()
    {
        return $this->belongsTo(Modulo::class, 'modulo', 'id');
    }
}
