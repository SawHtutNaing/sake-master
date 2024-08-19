<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Cocktail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CocktailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoriesCount = Category::pluck('id')->count();


        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);


        curl_close($ch);
        $array = json_decode($response)->drinks;

        foreach ($array as $key => $value) {

            Cocktail::create([
                'name' => $value->strDrink,
                'category_id' => rand(1, $categoriesCount),
                'price' => rand(1111, 8888)

            ]);
        }
    }
}
