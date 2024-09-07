<?php

namespace App\Http\Controllers;

use App\Models\OrderRecord;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderRecordController extends Controller
{



    public function index()
    {
        $user = Auth::user();
        $orders = $user->orders();

        return Inertia::render('Orders', compact('orders'));
    }
    public function store(Request $request)
    {

        OrderRecord::insert([
            'ingredient' => json_encode($request->ingredients),
            'price' => $request->price,
            'category_id' => $request->category_id,
            'cocktails_id' => $request->id,
            'image' => $request->image,
            'user_id' => Auth::id()

        ]);
        return redirect()->route('dashboard');
    }
}
