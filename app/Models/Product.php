<?php
// Testando commit
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'price', 'details', 'category', 'images', 'firstImage'
    ];

    /**
     * Todas as imagens do Product
     * @author @Antony-Oliveira <antony.caiquec@gmail.com>
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany(ProductImages::class);
    }

    /**
     * Primeira imagem do Product
     * @author @Antony-Oliveira <antony.caiquec@gmail.com>
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function image(){
        return $this->hasOne(ProductImages::class);
    }

}
