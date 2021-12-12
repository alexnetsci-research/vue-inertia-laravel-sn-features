<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function getMyProfile()
    {
        return self::with('user')->where('user_id', auth()->user()->id)->first();
    }

    public static function getUserProfile($id)
    {
        return self::with('user')->where('user_id', $id)->first();
    }
}
