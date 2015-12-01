<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:49
 */
require_once 'CookieBusiness.php';
class CookieController
{
    private $cookie;
    public function __construct(){
        $this->cookie=new CookieBusiness();
    }

    public function setCookie($key,$value){
       $this->cookie->setCookie($key,$value);
    }
    public function getCookie($key){
      return $this->cookie->getCookie($key);
    }
    public function removeCookie($key){
        $this->cookie->removeCookie($key);
    }
}