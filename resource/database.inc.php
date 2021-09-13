<?php

define('HOSTNAME', 'localhost');
define('USERNAME', '');
define('PASSWORD', '');
define('DATABASE', 'inventory_products');

$con = new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE);
if($con->connect_errno){
    die("Connectiuon Unsuccefull:".$con->connect_errno);
}


?>