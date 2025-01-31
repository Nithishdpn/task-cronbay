<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "marketplace_db";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error){
    die(json_sncode(["status" => "error", "message" => $conn ->connect_error]));
}
?>