<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:43
 */
require_once "../Visitor/VisitorBusiness.php";
class VisitorController
{
    private $business;
    public function __construct(){
       $this->business=new VisitorBusiness();
    }
    public function getList(){
        return $this->business->getList();
    }
    public function delete($id){
        return $this->business->delete($id);
    }
}