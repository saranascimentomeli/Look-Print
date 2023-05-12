<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class Authenticate extends BaseMiddleware
{
    
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            
            $user = JWTAuth::parseToken()->authenticate();
        } catch(TokenExpiredException $e){

            return response()->json(['status' => 'Token is Expired'], 401);
        } catch(TokenInvalidException $e){
       
            return response()->json(['status' => 'Token is Invalid'], 401);
        } 
        catch (\Exception $e) {

            return response()->json(['status' => 'Authorization token not found'], 401);
        }
        return $next($request);
    }
}
