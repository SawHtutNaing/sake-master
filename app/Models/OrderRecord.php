<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderRecord extends Model
{
    use HasFactory;

    public function cocktail()
    {
        return $this->belongsTo(Cocktail::class ,'cocktails_id','id');
    }
}
