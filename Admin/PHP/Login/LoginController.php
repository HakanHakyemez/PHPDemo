<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:25
 */
require_once 'LoginBusiness.php';
require_once '../Cookie/CookieController.php';

class LoginController
{
    private $login_business;
    private $cookie_name;
    private $cookieCtrl;
    public function __construct(){
        $this->login_business=new LoginBusiness();
        $this->cookieCtrl=new CookieController();
        $this->cookie_name=="currentclient";
    }

    public function login($username,$password){
        if($username!=null && $password !=null){
           $response= $this->login_business->getUser($username,$password);
            if(isset($response)){
               $this->cookieCtrl->setCookie($this->cookie_name,$response);
                return $response;
            }
            return false;
        }
        return false;
    }
    public function isLoggedIn(){
        $var=$this->cookieCtrl->getCookie($this->cookie_name);
        return isset($var);
    }
    public function getCurrentUser(){
        $response=$this->cookieCtrl->getCookie($this->cookie_name);
        return $response;
    }
    public function logout(){
        $this->cookieCtrl->removeCookie($this->cookie_name);
    }
}