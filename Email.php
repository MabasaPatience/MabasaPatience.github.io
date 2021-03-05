<?php
$name=$_POST['name'];
$visitorsEmail=$_POST['email'];
$phonenumber=$_POST['tel'];
$message=$POST['message'];

mail($to,$visitorsEmail,$phonenumber,$message);

?>