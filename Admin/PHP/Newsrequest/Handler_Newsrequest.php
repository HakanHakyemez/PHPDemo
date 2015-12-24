<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:39
 */

require_once "NewsrequestController.php";
$newsRequestCtrl=new NewsrequestController();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$request=$_GET["request"];

if(isset($request)){
    switch ($request) {
        case "delete":
            $id=$_GET["id"];
            $response= $newsRequestCtrl->delete($id);
            echo json_encode($response);
            break;
        case "getlist":
            $list=$newsRequestCtrl->getList();
            echo json_encode($list);
            break;
        default:
            echo "Your request is null!";
    }
}

