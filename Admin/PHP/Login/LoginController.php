<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:25
 */
require_once 'LoginBusiness.php';
class LoginController
{
    public function __construct(){
       $login_business=new LoginBusiness();
    }

    public function Login($username,$password){}
    public function IsLoggedIn(){}
    public function GetCurrentUser(){}
    public function Logout(){}
}