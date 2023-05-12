<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Models\UsersRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {

        $login_type = filter_var(request('email'), FILTER_VALIDATE_EMAIL) ? 'email' : 'name';

        $credentials = [$login_type => request('email'), 'password' => request('password')];

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $credentials);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    public function MeRoutes()
    {

        return response()->json($this->GetRolesFromUser(auth()->user()));
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    // /**
    //  * Refresh a token.
    //  *
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // public function refresh()
    // {
    //     return $this->respondWithToken(auth()->refresh());
    // }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $credentials)
    {
        $user = auth()->user();
        JWTAuth::factory()->setTTL($user->timeout);
        $token = JWTAuth::attempt($credentials);

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'name' => $user->name,
            'email' => $user->email
        ]);
    }


    private function GetRolesFromUser($user)
    {

        $users_roles = DB::table('users_roles')->where('user', '=', $user->id)->get();

        $ids_roles = [];
        foreach ($users_roles as $k => $v) {

            array_push($ids_roles, $v->role);
        }

        $routes_ids = DB::table('roles_routes')->whereIn('role', $ids_roles)->pluck('route')->toArray();

        $routerFathers =  DB::table('routes')->whereIn('id', $routes_ids)->whereNull('father')->get();

        foreach ($routerFathers as $k => $v) {

            $childs = DB::table('routes')->whereIn('id', $routes_ids)->where('father', '=', $v->id)->get();
            $routerFathers[$k]->children = $childs;
        }



        return $routerFathers;
    }

    public function GetModulos()
    {

        try {

            $user = auth()->user();



            $roles_ids = DB::table('users_roles')->where('user', '=', $user->id)->pluck('role')->toArray();

            $routes_ids = DB::table('roles_routes')->whereIn('role', $roles_ids)->pluck('route')->toArray();

            $modulos_ids = DB::table('routes')->whereNotNull('father')->whereIn('id', $routes_ids)->groupBy('modulo')->pluck('modulo')->toArray();

            $modulos = DB::table('modulos')->whereIn('id', $modulos_ids)->get();

            $modulos[0]->routes = DB::table('routes')->whereNotNull('father')->whereIn('id', $routes_ids)->get();

            return response()->json($modulos);
        } catch (\Throwable $th) {
        }
    }
}
