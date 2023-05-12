<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TestAuth extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $this->json('POST', '/auth/login', ['email' => 'admin', 'password' => '123'])
        ->seeJson([

            'ok' => true
        ]);
    }
}
