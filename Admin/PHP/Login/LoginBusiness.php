<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:33
 */
require_once "../Database/MysqliDb.php";
class LoginBusiness
{
    private $db;
    public function __construct(){
        $this->db=new MysqliDb();
    }
    public function getUser($username,$password){

        $this->db->where ("Username",$username);
        $this->db->where ('Password', $password);
        $results = $this->db->getOne('hoi_login');

        return $results;
    }
}