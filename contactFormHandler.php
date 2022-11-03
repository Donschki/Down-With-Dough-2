<?php
$name = $_POST['name'];
$lastName = $_POST['lastName'];
$visitor_email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];

$email_from = 'info@downwithdough.co.za';


$email_subject = "Website Form Submission";

$email_body = "User Name: $name.\n".
              "User Last Name: $lastName.\n".
              "User Email: $visitor_email.\n".
              "User Mobile: $mobile.\n".
              "User Message: $message.\n";

                  $to "info@downwithdough.co.za"

                  $headers = "From: $email_from\r\n";

                  $headers = "Reply-To: $visitor_email \r\n"

                  mail($to,$email_subject,$email_body,$headers);

                  header("Location: Contact Form.html");

?>