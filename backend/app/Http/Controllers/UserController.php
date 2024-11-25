<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{

    function get_users(Request $request){
        $users = User::all();

        return response()->json([
            "Users" => $users,
        ]);
    }
    function get_user(Request $request, $id){
        $user = User::find($request->id);

        return response()->json([
            "User" => $user,
        ]);
    }

    function add_user(Request $request){
        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
            'user_type' => $request->user_type,

        ]);

        return response()->json([
            "New_user" => $user,
        ]);
    }
    function edit_user(Request $request){
        $user = User::find($request->id)->update([

            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
            'user_type' => $request->user_type,


        ]);
        return response()->json([
            "Updated_user" => $user,
        ]);
    }
    function delete_user($id){
        $user = User::find($id)->delete();

        return response()->json([
            "Deleted_user" => $user,
        ]);
    }
}
