<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: PUT");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  include_once 'db_class.php';
  include_once 'news_class.php';

  $database = new Database();
  $db = $database->getConnection();

  $news = new News($db);
  $json_data = json_decode(file_get_contents("php://input"));

  if(isset($json_data->like_count) && ($json_data->like_count == "yes")){
    $news->update("like_count", $json_data->id);
  }else if(isset($json_data->dislike_count) && ($json_data->dislike_count == "yes")){
    $news->update("dislike_count", $json_data->id);
  }else if(isset($json_data->view_count) && ($json_data->view_count == "yes")){
    $news->update("view_count", $json_data->id);
  }
 ?>
