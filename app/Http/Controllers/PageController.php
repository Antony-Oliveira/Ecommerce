<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function homepage(){

        return inertia('Homepage', [
            'products' => Product::with(['image'])->get(),
            'title' => 'Ecommerce'
        ]);

    }
    public function contactpage(){
        return inertia('ContactPage');
    }
    public function aboutpage(){
        return inertia('AboutPage');
    }
    public function storepage(){
        $products = Product::with('images')->get();

        return inertia('StorePage', [
            'products' => $products,
            'tittle' => 'Ecommerce'
        ]);
    }
    public function shoppingpage(){
        return inertia('ShoppingPage');
    }
}
