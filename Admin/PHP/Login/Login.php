<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 24.10.2015
 * Time: 12:30
 */
require_once "LoginController.php";
$login=new LoginController();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

