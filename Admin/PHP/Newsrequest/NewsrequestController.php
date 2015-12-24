<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:40
 */
require_once "../Newsrequest/NewsRequestBusiness.php";
class NewsrequestController
{
    private $business;
    public function __construct(){
        $this->business=new NewsRequestBusiness();
    }
    public function getList(){
        return $this->business->getList();
    }
    public function delete($id){
        return $this->business->delete($id);
    }
}