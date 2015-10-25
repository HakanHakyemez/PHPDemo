<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:33
 */
require_once __ROOT__.'/Database/Database.php';
class LoginBusiness
{
    public function __construct(){
        //$host="mysql.hostinger.web.tr";
        //$username="u995979635_hoi";
        //$password="veysel123";
        //$database="u995979635_hoi";

        $host="localhost";
        $username="root";
        $password="";
        $database="hoi_db";

        $db=new Database();
    }
    public function CheckUser($username,$password){}
}