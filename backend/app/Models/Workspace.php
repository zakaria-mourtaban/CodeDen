<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Workspace extends Model
{
    public function usersAccess(){
        return $this->hasMany(WorkspaceAccess::class);
    }

    public function usersWithAccess(){
        return $this->belongsToMany(User::class, 'workspace_access')
                    ->withPivot('access_type')
                    ->withTimestamps();
    }
}
