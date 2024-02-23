<?php

phpinfo();


// $fname = $_POST['fname'];
// $role = $_POST['role'];
// $email = $_POST['email'];
// $message = $_POST['message'];

// // $mailheader = "From:".$fname."<".$email">\r\n";
// $mailheader = "From: " . $fname . " <" . $email . ">\r\n";

// $recipient = "dangan.creative@gmail.com";

// mail($recipient, $role, $message, $mailheader);
// or die("Error");

// echo"message sent";


// Check for empty fields
if (empty($_POST['name']) || empty($_POST['role']) || empty($_POST['email']) || empty($_POST['message'])) {
    echo "Pls fill everything";
    return false;
}

// Sanitize form inputs
$name = htmlspecialchars($_POST['name']);
$role = htmlspecialchars($_POST['role']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Create email parts
$to = 'dangan.creative@gmail.com';
$subject = "Website Contact Form: $name";
$text = "You have received a new message from your website contact form.\n\n" . 
        "Here are the details:\n\n" .
        "Name: $name\n\n" .
        "Email: $email\n\n" .
        "Role: $role\n\n" .
        "Message:\n$message";
$header = "Location: index.html?mailsent"; 

//send email
mail($to,$subject,$text,$header);
header("Location: index.html?mailsent")
return true;
if(mail($to, $subject, $text, $header)) {
    echo 'Thank You!';    
}

// Send the email - did nto work
// if (mail($to, $subject, $text, $header)) {
//     header("Location: index.html?mailsent");
//     exit();
// } else {
//     echo 'boo, no email was sent';
// }
 
?>
