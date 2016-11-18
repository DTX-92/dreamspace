<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use \Firebase\JWT\JWT;

$app->get('/', function () use ($app) {

    $hash =  password_hash('Pass1133', PASSWORD_BCRYPT);
    echo $hash.'<br>'.'<br>';
    echo password_verify('Pass1133', $hash) ? 'true' : 'false';

    return ; 

//    $results = app('db')->select("SELECT * FROM test");
//    var_dump($results);
//    return 1;
//	$token = array(
//        'email' =>  'mail',
//        'id' => 'qwe',
//        'expires' => (strtotime('NOW') + (0 * 60 * 60)) // expires in an hour
//    );
//
//    // create JWT token, #ref: https://github.com/firebase/php-jwt
//    $jwt_token = JWT::encode($token, 'qweasd');
//
//    $token = $jwt_token;
//
//    var_dump(JWT::decode($token, 'qweasd', array('HS256')));
//    return $app->version();
});
