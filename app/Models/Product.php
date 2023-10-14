<?php
// Testando commit
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'price', 'details', 'category', 'images'
    ];

    public function images(){
        return $this->hasMany(ProductImages::class);
    }


}
