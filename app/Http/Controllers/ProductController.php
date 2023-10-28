<?php

namespace App\Http\Controllers;

use App\Events\NewProduct;
use App\Jobs\UploadImages;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage as FacadesStorage;
use Illuminate\Support\Facades\Validator;

use Kreait\Firebase\Contract\Storage;

class ProductController extends Controller
{

    public $storage;

    public function __construct(Storage $storage)
    {
        $this->storage = $storage;
    }


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
                'images.*' => 'image|mimes:jpeg,png,gif|max:19000', // valor temporario até ver o resize
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
                $images =  $request->file('images');
                $imagesData = [];

                foreach ($images as $image) {
                    $extension = $image->extension();
                    $imageName = md5($image->getClientOriginalName() . strtotime("now")) . "." . $extension;

                    FacadesStorage::put("temp/".$imageName, file_get_contents($image->path()));
                    $imagePath = 'product-images/' . $imageName;
                    $imagesData[] = ['path' => $imagePath, 'content' => $image->path(), 'name' => $imageName];
                }
                UploadImages::dispatch($product, $imagesData);
            }
            return response()->json(['message' => 'Produto criado com sucesso'], 200);
        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product->load('images');
        return inertia('DetailsPage', [
            'product' => $product
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
