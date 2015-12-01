<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:40
 */
require_once "../Database/MysqliDb.php";
class NewsRequestBusiness
{
    private $db;
    public function __construct(){

        $this->db=new MysqliDb();
    }
    public function getList(){
        $results = $this->db->get('hoi_newsrequest');

        return $results;
    }
    public function delete($id){
        $this->db->where('Id', $id);
        if( $this->db->delete('hoi_newsrequest'))
            return true;
    }
}