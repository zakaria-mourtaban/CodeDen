<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaboration extends Model{
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'email',
        'permission',
    ];

}
