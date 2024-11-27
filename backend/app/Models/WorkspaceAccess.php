<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkspaceAccess extends Model
{
    use HasFactory;

    protected $table = 'workspaces_access';

    protected $fillable = [
        'user_id',
        'workspace_id',
        'access_type',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function workspace(){
        return $this->belongsTo(Workspace::class);
    }
}
