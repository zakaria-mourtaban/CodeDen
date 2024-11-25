<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workspace;


class WorkspaceController extends Controller
{
    function add_workspace(Request $request){
        $workspace = Workspace::create();

        return response()->json([
            "New_workspace" => $workspace,
        ]);
    }

    function delete_workspace($id){
        $workspace = Workspace::find($id)->delete();

        return response()->json([
            "Deleted_workspace" => $workspace,
        ]);
    }
}
