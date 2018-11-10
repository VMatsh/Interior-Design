<?php

    if($_POST['password'] !== $_POST['confirmPassword']){
        echo 'invalid password';
        die();
    }

    $mysqli=mysqli_connect('localhost','root','','vrezh');

    $query= 'INSERT INTO log_in(login, password) VALUES ("'.$_POST['login'].'","'.$_POST['password'].'")';

    $result = mysqli_query($mysqli,$query);
    if(!$result){
        echo 'error'.'<br>'.mysqli_error($mysqli);
    }

    echo "Thank you for registration"

?>