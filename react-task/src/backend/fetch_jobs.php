<?php
include 'db.php';

$sql = "SELECT * FROM  jobs ORDER BY id DESC LIMIT 10";
$results = $conn->query($sql);

$jobs = [];
while ($row = $results->fetch_assoc()){
    $jobs[] = $row;
}

echo json_encode($jobs);