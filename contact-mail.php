<?php 

if($_POST["submit"]){
    $recipient="dumaloveronika@gmail.com";
    $subject="Contact Forml";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $senderMessage=$_POST["message"];
    
    $mailBody="Name: $sender\nEmail: $senderEmail\n\n $senderMessage";
    
    mail($recipient, $subject, $mailBody, "Form: $sender <$senderEmail>");
    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>