<?php

$server = 'localhost';
$user = 'root';
$Pass = '';
$db = 'Nelson_db';
$con =  mysqli_connect($server,$user,$Pass,$db);
if($con->connect_error)
{
	die("conection failed:". $con->connect_error);
	
}
else
{
	/*
echo"connection successful";*/

}



?>
