<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 17.10.2015
 * Time: 17:33
 *
 * v.erdemci@gmail.com
 * veysel123
 */
require_once '../Database/Database.php';

//$host="mysql.hostinger.web.tr";
//$username="u995979635_hoi";
//$password="veysel123";
//$database="u995979635_hoi";

$host="localhost";
$username="root";
$password="";
$database="hoi_db";

//$db = new Database($host, $username, $password, $database);
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->FullName;
$email = $request->Email;
//echo $email; //this will go back under "data" of angular call.

$data = array(
    'FullName' => $name,
    'Email' => $email,
    'IsActive' => true

);

//$id = $db->insert('hoi_newsrequest', $data) ; // $id will have the auto-increment
echo var_dump($data);
echo "Data inserted. ID:" ;