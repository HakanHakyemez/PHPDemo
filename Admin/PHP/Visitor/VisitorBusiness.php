<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:43
 */
require_once "../Database/MysqliDb.php";
class VisitorBusiness
{
    private $db;
    public function __construct(){
        $this->db=new MysqliDb();
    }
    public function getList(){
        $users = $this->db->get ("hoi_contact");
        return $users;
    }
    public function delete($id){
        $this->db->where('Id', $id);
        if( $this->db->delete('hoi_contact'))
            return true;
    }
}