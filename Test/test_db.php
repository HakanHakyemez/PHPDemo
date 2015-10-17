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

$host="mysql.hostinger.web.tr";
$username="u995979635_hoi";
$password="veysel123";
$database="u995979635_hoi";

$db = new Database($host, $username, $password, $database);

$data = array(
    'FullName' => 'Hakan Hakyemez',
    'Email' => 'email@example.com',
    'IsActive' => true

);

$id = $db->insert('hoi_newsrequest', $data) ; // $id will have the auto-increment

echo "Data inserted. ID:" . $id ;