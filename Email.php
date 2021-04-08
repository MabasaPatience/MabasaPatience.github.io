<?php

if(!isset($_POSt['Submit'])){
    echo"error";
}

$name=$_POST['name'];
$visitorsEmail=$_POST['email'];
$phonenumber=$_POST['tel'];
$message=$POST['message'];
$to="mabasapatience3@ganil.com"

if(empty($name) || empty($visitorsEmail) || empty($phonenumber) || empty($message)){
    echo "all feilds are medetory";
    exit;
}else{
     header("Location: index.html");
    mail($to,$visitorsEmail,$phonenumber,$message);
   
}



?>
