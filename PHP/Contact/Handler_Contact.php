<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 1.12.2015
 * Time: 19:39
 */

require_once "ContactController.php";
$contactCtrl=new ContactController();

$postdata = file_get_contents("php://input");
$model = json_decode($postdata);

$request=$_GET["request"];


if(isset($request)){
    switch ($request) {
        case "save":
            $response= $contactCtrl->save($model);
            echo json_encode($response);
            break;
        default:
            echo "Your request is null!";
    }
}

