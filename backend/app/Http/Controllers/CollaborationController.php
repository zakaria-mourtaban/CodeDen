<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collaboration;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class CollaborationController extends Controller{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'permission' => 'required|in:view,edit',
        ]);

        $receiver = User::where('email', $request->email)->first();

        $collaboration = Collaboration::create([
            'sender_id' => Auth::id(),
            'receiver_id' => $receiver ? $receiver->id : null,
            'email' => $request->email,
            'permission' => $request->permission,
        ]);

       
    }

    
}
