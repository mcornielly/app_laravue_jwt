<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Miguel Angel Cornielly',
            'email' => 'mcornielly@gmail.com',
            'password' => Hash::make('admin'),
            'role' => '1'
        ]);
    }
}
