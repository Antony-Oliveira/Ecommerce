<?php

namespace App\Jobs;

use App\Events\NewProduct;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage as FacadesStorage;

class UploadImages implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(protected Product $product, protected $imagesData)
    {
        $this->product = $product;
        $this->imagesData = $imagesData;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $imagesToCreate = [];

        foreach ($this->imagesData as $imageData) {
            $imageContent = FacadesStorage::get('/temp/'.$imageData['name']);
            app("firebase.storage")->getBucket()->upload(
                $imageContent,
                [
                    'name' => "product-images/" . $imageData["name"]
                ]
            );
            $imagesToCreate[] = ["path" => $imageData["path"]];
        }
        FacadesStorage::deleteDirectory('temp/');
        $this->product->images()->createMany($imagesToCreate);
        broadcast(new NewProduct());
    }
}
