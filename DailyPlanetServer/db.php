<?php
  $server = "localhost";
  $username = "root";
  $password = "";
  $db = "DailyPlanetDB";

  $connection = new mysqli($server, $username, $password, $db);
  $connection->query("SET NAMES utf8");

  if($connection -> connect_error){
    die("Connection failed: " . $connection -> connect_error);
  }
?>
