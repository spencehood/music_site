<?php

    if(isset($_POST['submit'])) {
        // Do your form processing here and set the response
        
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        mail('spencehoodnow@gmail.com', 'Message from www.spencehood.com (music side)', 
        $name . ' has sent you a message: 

        ' .  
        '"' . $message . '"',
        'From: ' . $email);

        $emailSent = true;
        
        // echo 'Thank you for your Email. We will get in touch with you very soon.';
    }
    
?>

