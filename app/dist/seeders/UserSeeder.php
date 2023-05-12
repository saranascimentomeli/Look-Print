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

            ['name' => 'admin', 'email' => 'paulo.leite@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'eagle', 'email' => 'eagle_inbound@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Inventario', 'email' => 'inventario@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'tl', 'email' => 'tl@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Acompanhamento', 'email' => 'Acompanhamento@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Shipping', 'email' => 'Shipping@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Saga', 'email' => 'Saga@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Sla', 'email' => 'Sla@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );

        User::updateOrCreate(

            ['name' => 'Heatmap', 'email' => 'heatmap123@mercadolivre.com'],
            ['password' => bcrypt('123')]
        );
    }
}
