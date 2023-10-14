<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('NewProductForm.test');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'images' => 'required|array',
                'images.*' => 'image|mimes:jpeg,png,gif|max:2048',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 400);
            }

            $product = new Product([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'details' => $request->input('details'),
                'category' => $request->input('category')
            ]);

            $product->save();

            if ($request->hasFile('images')) {
                $images = $request->file('images');

                foreach ($images as $image) {
                    $extension = $image->extension();
                    $imageName = md5($image->getClientOriginalName() . strtotime("now")) . "." . $extension;
                    $image->move(storage_path('app/public/product_images'), $imageName);
                    $imagesData[] = ['path' => $imageName];
                }

                $product->images()->createMany($imagesData);
            }

            return response()->json(['message' => 'Produto criado com sucesso'], 200);
        }catch(\Exception $error){
            return response()->json(['error' => $error->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {

        $product = Product::with('images')->find($id);
        if (!$product) {
            abort(404, "Produto não existente");
        }
        return inertia('DetailsPage', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
