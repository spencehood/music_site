<?php

    if(isset($_POST['submit'])) {
        // Do your form processing here and set the response
        
        $email = $_POST["email"];

        mail('spencehoodnow@gmail.com', 'New fan email address! 

        ' .  
        'Email address: ' . $email);

        $emailSent = true;
        
        // echo 'Thank you for your Email. We will get in touch with you very soon.';
    }
    
?>

