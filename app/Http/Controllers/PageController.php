<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function homepage(){

        return inertia('Homepage', [
            'products' => Product::all(),
            'title' => 'Ecommerce'
        ]);

    }
}
