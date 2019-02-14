<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(["namespace" => "Fapi"], function () {

    // 用户相关
    Route::POST("user/login", "UserFapi@login");
    Route::POST("user/setInfo", "UserFapi@setUserInfo");
    Route::POST("user/createAddrs", "UserFapi@createAddrs");

    // 分类
    Route::GET("category/list", "CategoryFapi@unitList");

    // 收藏
    Route::POST("collection/create", "CollectionFapi@create");
    Route::GET("collection/list", "CollectionFapi@list");
    Route::DELETE("collection/delete", "CollectionFapi@remove");
});
