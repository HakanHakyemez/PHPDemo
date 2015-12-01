<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 29.11.2015
 * Time: 18:22
 */
class CookieBusiness
{
    private $default_time;
    public function __construct(){
        $this->default_time=time() + (86400 * 30);
    }
    public function setCookie($key,$value){
        if(gettype($value)=="String")
            setcookie($key, $value, $this->default_time, "/","", 0);
        else
            setcookie($key, serialize($value), $this->default_time, "/","", 0);
    }
    public function getCookie($key){
        if(isset($_COOKIE[$key]))
            return unserialize($_COOKIE[$key]);
        else
            return null;
    }
    public function removeCookie($key){
        $_COOKIE[$key] = null;
    }
}