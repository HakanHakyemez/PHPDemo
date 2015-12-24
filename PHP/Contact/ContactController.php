<?php

/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:43
 */
require_once "ContactBusiness.php";
class ContactController
{
    private $business;

    public function __construct(){
       $this->business=new ContactBusiness();
    }
    public function save($model){
        $arrayModel=(array)$model;
        return $this->business->save($arrayModel);
    }

}