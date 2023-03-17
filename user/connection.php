<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "KLIKTRON";

    $conn = mysqli_connect($servername,$username,$password,$dbname);

    if (!$conn) {
        # code...
        die("connection failed : ".mysqli_connect_error());
    }
    echo "koneksi berhasil";
?>