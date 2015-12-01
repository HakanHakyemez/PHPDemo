<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 29.11.2015
 * Time: 18:49
 */
require_once "../Login/LoginBusiness.php";
require_once "../Login/CookieBusiness.php";

$login_business=new LoginBusiness();
$session_business=new CookieBusiness();
$result=$login_business->getUser("admin","12345");
var_dump(isset($result));
echo $result["Id"];
echo $result["Username"];
echo "</br></br>---</br>";
$session_business->setCookie("currentUser",$result);
