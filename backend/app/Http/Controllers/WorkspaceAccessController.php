<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkspaceAccess;

class WorkspaceAccessController extends Controller

{

    function grant_access(Request $request){
        $workspace_access = WorkspaceAccess::create([

            'user_id' => $request->user_id,
            'workspace_id' => $request->workspace_id,
            'access_type' => $request->access_type,
            
        ]);

        return response()->json([
            "New_access" => $workspace_access,
        ]);
        
    }
    
    function update_access(Request $request){
        $workspace_access = WorkspaceAccess::where('user_id', $request->user_id)
        ->where('workspace_id', $request->workspace_id)
        ->update(['access_type' => $request->access_type]);

        return response()->json([
            "Updated_access" => $workspace_access,
        ]);
        
    }
    
    function get_accessed_user(Request $request){
        $granted_user = WorkspaceAccess::with('user')
        ->where('workspace_id', $request->workspace_id)
        ->get();

        return response()->json([
            "Granted_user" => $granted_user,
        ]);
    }

}
