<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  include_once 'db_class.php';
  include_once 'news_class.php';

  $database = new Database();
  $db = $database->getConnection();

  $news = new News($db);

  $stmt = $news->read();
  $num = $stmt->rowCount();

  if($num>0){

    // products array
    $news_arr=array();
    $news_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $news_item=array(
            "id" => $id,
            "title" => $title,
            "content" => html_entity_decode($content),
            "image_path" => $image_path,
            "type" => $type,
            "like_count" => $like_count,
            "dislike_count" => $dislike_count,
            "view_count" => $view_count,
            "date_time" => $date_time,
            "company_name" => $company_name,
            "company_image" => $company_image
        );

        array_push($news_arr["records"], $news_item);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($news_arr);
}else{

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}
 ?>
