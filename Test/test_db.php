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
$a=5;
$b=3;

require_once '../Database/MysqliDb.php';

//$host="mysql.hostinger.web.tr";
//$username="u995979635_test";
//$password="veysel123";
//$database="u995979635_test";

//$host="37.152.74.51";
//$username="mhalilog_hoi";
//$password="veysel123";
//$database="mhalilog_hoi";
//
phpinfo();
$host="localhost";
$username="root";
$password="";
$database="hoi_db";

$db = new MysqliDb($host, $username, $password, $database);


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name =$request->FullName;
$email = $request->Email;
//echo $email; //this will go back under "data" of angular call.

$data = array(
    'FullName' => "Veysel",
    'Email' => "hakan@hakyemez.com",
    'Message' => "test test test test",
    'Subject' => "test test test test",
    'Phone' => "555555555",
    'CreatedDate'=>date('Y-m-d H:i:s'),
    'IsActive' => true
);

$id = $db->insert('hoi_contact', $data) ; // $id will have the auto-increment
echo var_dump($data);
echo "Data inserted. ID:".$id ;