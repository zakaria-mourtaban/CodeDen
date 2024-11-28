<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model{
    protected $fillable = [
        'sender_id', 
        'receiver_id', 
        'resource_id', 
        'permission', 
        'status'
    ];
}
