<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use Illuminate\Support\Facades\Storage;


class FileController extends Controller
{

    function save_code_file(Request $request){
        $request->validate([
            'file_name' => 'required|string|max:255',
            'content' => 'required|string',
            'user_id' => 'required|integer',
        ]);

        $filePath = 'code-files/' . $request->user_id . '/' . $request->file_name;

        Storage::disk('local')->put($filePath, $request->content);

        $file = File::create([
            "file_name" => $request->file_name,
            "language" => $request->language,
            "content" => $request->content,
            "user_id" => $request->user_id,
        ]);

        return response()->json([
            'message' => 'File saved successfully!',
            'path' => $filePath,
        ], 201);
    }


    function get_code_file(Request $request){
        $request->validate([
            'file_path' => 'required|string',
        ]);
    
        $filePath = $request->file_path;
    
        if (!Storage::disk('local')->exists($filePath)) {
            return response()->json(['error' => 'File not found!'], 404);
        }
    
        $content = Storage::disk('local')->get($filePath);
    
        return response()->json([
            'file_path' => $filePath,
            'content' => $content,
        ], 200);
    }
    

    function delete_code_file(Request $request){
        $request->validate([
            'file_path' => 'required|string',
        ]);

        $filePath = $request->file_path;

        if (Storage::disk('local')->exists($filePath)) {
            Storage::disk('local')->delete($filePath);
            return response()->json(['message' => 'File deleted successfully!'], 200);
        }

        return response()->json(['error' => 'File not found!'], 404);
    }


    function update_code_file(Request $request){
        $request->validate([
            'file_path' => 'required|string',
            'new_content' => 'required|string',
        ]);

        $filePath = $request->file_path;

        if (Storage::disk('local')->exists($filePath)) {
            Storage::disk('local')->put($filePath, $request->new_content);
            return response()->json(['message' => 'File updated successfully!'], 200);
        }

        return response()->json(['error' => 'File not found!'], 404);
    }

    function download_code_file(Request $request){
        $request->validate([
            'file_path' => 'required|string',
        ]);

        $filePath = $request->file_path;

        if (Storage::disk('local')->exists($filePath)) {
            return response()->download(storage_path('app/' . $filePath));
        }

        return response()->json(['error' => 'File not found!'], 404);
    }





    // function get_files(Request $request){
    //     $files = File::all();

    //     return response()->json([
    //         "Files" => $files,
    //     ]);
    // }
    // function get_file(Request $request, $id){
    //     $file = File::find($request->id);

    //     return response()->json([
    //         "File" => $file,
    //     ]);
    // }

    // function add_file(Request $request){
    //     $file = File::create([
    //         "name" => $request->name,
    //         "email" => $request->email,
    //         "password" => $request->password,
    //     ]);

    //     return response()->json([
    //         "New_file" => $file,
    //     ]);
    // }
    // function edit_user(Request $request){
    //     $user = User::find($request->id)->update([

    //         "name" => $request->name,
    //         "email" => $request->email,
    //         "password" => $request->password,

    //     ]);
    //     return response()->json([
    //         "Updated_user" => $user,
    //     ]);
    // }
    // function delete_user($id){
    //     $user = User::find($id)->delete();

    //     return response()->json([
    //         "Deleted_user" => $user,
    //     ]);
    // }
}
