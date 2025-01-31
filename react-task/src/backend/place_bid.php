<?php

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$job_id = $data['job_id'];
$bidder_name = $data['bidder_name'];
$bid_amount = $data['bid_amount'];

$sql = "INSERT INTO bids (job_id, bidder_name, bid_amount) VALUES ('$job_id', '$bidder_name', '$bid_amount')";

if ($conn->query($sql) === TRUE){
    $conn->query("UPDATE jobs SET lowest_bid = LEAST(lowest_bid, $bid_amount) WHERE id = $job_id");
    echo json_encode(["status" => "success"]);
}else{
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

?>