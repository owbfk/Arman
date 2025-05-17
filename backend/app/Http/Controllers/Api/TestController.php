<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TestController extends Controller
{
    public function index(): JsonResponse {
        return response()->json([
            'message' => 'Hello from Laravel!',
            'data' => [1, 2, 3]
        ]);
    }
}
