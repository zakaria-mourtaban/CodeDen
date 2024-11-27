<?php

namespace App\Http\Controllers;

use App\Events\Room;
use Illuminate\Http\Request;
use App\Models\Workspace;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class WorkspaceController extends Controller
{
	function open_workspace(Request $request, $id)
	{
		$workspace = Workspace::find($id);

		if (!$workspace) {
			return response()->json([
				"error" => "Workspace not found.",
			], 404);
		}

		broadcast(new Room($id));
		return response()->json(
			["status" => "success"]
		);
	}

	function add_workspace(Request $request)
	{
		$workspace = Workspace::create();

		$filePath = 'code-files/' . $workspace->id;

		Storage::disk('local')->makeDirectory($filePath);


		return response()->json([
			"New_workspace" => $workspace,
			'path' => $filePath,
		]);
	}

	function delete_workspace($id)
	{
		$workspace = Workspace::find($id);

		if (!$workspace) {
			return response()->json([
				"error" => "Workspace not found.",
			], 404);
		}

		$folderPath = 'code-files/' . $workspace->id;

		Storage::disk('local')->deleteDirectory($folderPath);

		$workspace->delete();

		return response()->json([
			"message" => "Workspace deleted successfully.",
			"Deleted_workspace" => $workspace,
		]);
	}
}
