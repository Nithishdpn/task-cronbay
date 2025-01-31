<?php

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$title = $data['title'];
$description = $data['description'];
$poster_name = $data['poster_name'];
$expiration = $data['expiration'];

$sql = "INSERT INTO jobs (title, description, poster_name, expiration) VALUES ('$title', '$description', '$poster_name', '$expiration')";

echo json_encode(["status" => $conn->query($sql) ? "success" : "error"]);

?>