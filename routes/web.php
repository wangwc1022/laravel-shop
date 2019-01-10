<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/index', function () {
    return view('admin.pages.index');
});


Route::group(['middleware' => 'web', 'namespace'=>'Mapi'], function () {
    Route::GET("goods/list", "GoodsMapi@list");
});

Auth::routes();
