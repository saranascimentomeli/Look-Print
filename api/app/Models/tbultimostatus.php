<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbultimostatus extends Model
{
    use HasFactory;
    protected $table = 'tbultimostatus';
    protected $fillable = [
        'event_id', 'last_event', 'process', 'warehouse', 'status', 'user_id', 'last_event_date', 'process_type',
        'behavioral_strategy', 'idgestor', 'data', 'cad'
    ];

}
