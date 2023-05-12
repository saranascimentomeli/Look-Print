<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate(

            ['name' => 'admin', 'email' => 'renan@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );
    }
}
