<?php
/**
 * Created by PhpStorm.
 * User: 02483138
 * Date: 17.10.2015
 * Time: 17:33
 */
require_once '../Database/Database.php';

$host="localhost";
$username="root";
$password="";
$database="hoi_db";

$db = new Database($host, $username, $password, $database);

$data = array(
    'FullName' => 'Hakan Hakyemez',
    'Email' => 'email@example.com',
    'IsActive' => true

);

$id = $db->insert('hoi_newsrequest', $data) ; // $id will have the auto-increment

echo "Data inserted. ID:" . $id ;