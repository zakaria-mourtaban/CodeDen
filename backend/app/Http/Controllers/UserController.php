<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    function add_user(Request $request){
        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);

        return response()->json([
            "New_user" => $user,
        ]);
    }
}
