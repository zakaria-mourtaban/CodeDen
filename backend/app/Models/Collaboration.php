<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaboration extends Model{
    protected $fillable = [
        'email',
        'permission',
    ];

}
