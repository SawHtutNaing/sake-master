<?php

namespace App\Http\Controllers;

use App\Models\Cocktail;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CocktailController extends Controller
{
    public function index()
    {
        $cocktails = Cocktail::all();
        return Inertia::render(
            'Hello',
            [
                'cocktails' => $cocktails
            ]
        );
    }
    public function show(Cocktail $cocktail)
    {


        return Inertia::render(
            'Cocktails/orderCocktails',
            [
                'cocktail' => $cocktail
            ]
        );
    }
    public function create()
    {
        // go to the ui where to create form 
    }
    public function store()
    {
        //store the data into dtabase 
    }
    public function edit()
    {


        // go to the ui where to edit form 

    }
    public function update()
    {
        //store the data into dtabase 

    }
    public function delete() {}
}
