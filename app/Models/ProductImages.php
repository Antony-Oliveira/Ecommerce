<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class ProductImages extends Model
{
    use HasFactory;

    protected $fillable = [
        'path'
    ];

    protected $hidden = [
        'timestamps', 'product_id'
    ];

}
