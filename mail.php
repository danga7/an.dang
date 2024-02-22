<?php

$fname = $_POST['fname'];
$role = $_POST['role'];
$email = $_POST['email'];
$message = $_POST['message'];

// $mailheader = "From:".$fname."<".$email">\r\n";
$mailheader = "From: " . $fname . " <" . $email . ">\r\n";


$recipient = "dangan.creative@gmail.com";

mail($recipient, $role, $message, $mailheader)
or die("Error");

echo"message sent";
?>