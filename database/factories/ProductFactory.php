<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'price' => $this->faker->randomFloat(2, 10, 100),
            'details' => $this->faker->sentence,
            'category' => $this->faker->word,
            'image' => 'https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/products/f1.jpg'
        ];
    }
}
