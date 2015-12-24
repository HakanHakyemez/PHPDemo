<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:43
 */
require_once "../../Database/MysqliDb.php";
class ContactBusiness
{
    private $db;
    public function __construct(){
        $this->db=new MysqliDb();
    }
    public function save($model){
        $response = $this->db->insert("hoi_contact",$model);
        return $response;
    }
    public function saveEmail($model){
        $response = $this->db->insert("hoi_newsrequest",$model);
        return $response;
    }
}