<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create , insertt  -> query builder -> customizzble 
        // , save -> eloqent model -> instance 
        // $cocktailCategories = [
        //     ['name' => 'Margarita'],
        //     ['name' => 'Martini'],
        //     ['name' => 'Mojito'],
        //     ['name' => 'Daiquiri'],
        //     ['name' => 'Old Fashioned'],
        //     ['name' => 'Manhattan'],
        //     ['name' => 'Whiskey Sour'],
        //     ['name' => 'Negroni'],
        //     ['name' => 'Mai Tai'],
        //     ['name' => 'Bloody Mary'],
        //     ['name' => 'Cosmopolitan'],
        //     ['name' => 'Piña Colada'],
        //     ['name' => 'Gin and Tonic'],
        //     ['name' => 'Caipirinha'],
        //     ['name' => 'Tequila Sunrise'],
        //     ['name' => 'Moscow Mule'],
        //     ['name' => 'Sangria'],
        //     ['name' => 'Long Island Iced Tea'],
        //     ['name' => 'Espresso Martini'],
        //     ['name' => 'Tom Collins']
        // ];


        // Category::insert($cocktailCategories);
        $cocktailCategories = [
            "Margarita",
            "Martini",
            "Mojito",
            "Daiquiri",
            "Old Fashioned",
            "Manhattan",
            "Whiskey Sour",
            "Negroni",
            "Mai Tai",
            "Bloody Mary",
            "Cosmopolitan",
            "Piña Colada",
            "Gin and Tonic",
            "Caipirinha",
            "Tequila Sunrise",
            "Moscow Mule",
            "Sangria",
            "Long Island Iced Tea",
            "Espresso Martini",
            "Tom Collins"
        ];

        foreach ($cocktailCategories as $key => $value) {
            $category = new Category();
            $category->name = $value;
            $category->save();
        }
    }
}
