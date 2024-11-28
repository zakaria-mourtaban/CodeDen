<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OpenAIController extends Controller
{
    /**
     * Handle a request to OpenAI API.
     */
    public function chat(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'prompt' => 'required|string',
        ]);

        // Make a request to OpenAI
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        ])->post(config('services.openai.base_url') . '/chat/completions', [
            'model' => 'gpt-4', // Change to the desired model
            'messages' => [
                ['role' => 'user', 'content' => 'you are to analyse this code and provide usefull insight, you are to return a json object in a format of {code:thelineofcodethatneedschanges,refactor:thesuggestion}'.$request->prompt],
            ],
        ]);

        // Return OpenAI's response
        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json([
                'error' => 'Unable to process the request',
                'details' => "the api limit ran out or the open ai servers are",
            ], $response->status());
        }
    }
}
