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
    public function contactpage(){
        return inertia('ContactPage');
    }
    public function aboutpage(){
        return inertia('AboutPage');
    }
    public function storepage(){
        $products = Product::all();

        return inertia('StorePage', [
            'products' => $products,
            'tittle' => 'Ecommerce'
        ]);
    }
    public function shoppingpage(){
        return inertia('ShoppingPage');
    }
}
