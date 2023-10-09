<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//a a

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Header
Route::get('/', [PageController::class, 'homepage'])->name("homepage");
Route::get('/AboutPage', [PageController::class, 'aboutpage'])->name("aboutpage");
Route::get('/StorePage', [PageController::class, 'storepage'])->name("storepage");
Route::get('/ContactPage', [PageController::class, 'contactpage'])->name("contactpage");
Route::get('/ShoppingPage', [PageController::class, 'shoppingpage'])->name("shoppingpage");
Route::get('/DetailsPage', [PageController::class, 'detailspage'])->name('detailspage');


Route::get('/products/{id}', [ProductController::class, 'show'])->name('product.details');



// Route::get('/teste', [PageController::class, 'teste'])->middleware('');




require __DIR__.'/auth.php';
