<?php

use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRolesAndUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $alex = User::create([
            'name' => 'Alex',
            'email' => 'alex@net.dev',
            'password' => Hash::make('airliner')
        ]);

        Profile::create([
            'user_id' => $alex->id,
            'slug' => $alex->name
        ]);

        $roxy = User::create([
            'name' => 'Roxy',
            'email' => 'roxy@net.dev',
            'password' => Hash::make('airliner')
        ]);

        Profile::create([
            'user_id' => $roxy->id,
            'slug' => $roxy->name
        ]);

        $david = User::create([
            'name' => 'David',
            'email' => 'david@net.dev',
            'password' => Hash::make('airliner')
        ]);

        Profile::create([
            'user_id' => $david->id,
            'slug' => $david->name
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
