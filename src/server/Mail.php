<?php

if(isset($_POST["submit"])){
    $first_name = $_POST['first_name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $message = $_POST['message'];

    // Mail parameters
    $subject = 'Appatibenedict';

    mail(to: 'appatibenedict@gmail.com', subject: $subject, message: $message);
}



