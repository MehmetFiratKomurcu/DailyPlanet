<?php
require "db.php";

$title_handled = $_POST["title"];
$content_handled = $_POST["content"];
$image_handled = $_FILES["image"]["name"];
$type_handled = $_POST["news_type"];
$companies_handled = $_POST["news-companies"];

if(uploadImage()){
  $title_handled = $connection->real_escape_string($title_handled);
  $content_handled = $connection->real_escape_string($content_handled);
  $image_handled = $connection->real_escape_string($image_handled);
  $type_handled = $connection->real_escape_string($type_handled);

  date_default_timezone_set('Europe/Istanbul');
  $date = date("Y-m-d H:i:s");

  $sql = "INSERT INTO News (title, content, image_path, type, date_time, company_id)
  VALUES ('$title_handled', '$content_handled', 'images/$image_handled', '$type_handled', '$date', '$companies_handled')";

  if($connection->query($sql) == TRUE){
  }else{
    echo "Error. " . $connection->error;
  }

  $connection->close();
}else{
  ?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  </head>
  <body>

    <div class="container">
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">ERROR</h4>
              <a href="index.php"><button type="button" class="close">&times;</button></a>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              An error occured while uploading image.
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <a href="index.php"><button type="button" class="btn btn-danger">Close</button></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
  <script type="text/javascript">
  $(window).on('load',function(){
    $('#myModal').modal('show');
  });
  </script>

<?php
}

function uploadImage(){
  $file_name = $_FILES['image']['name'];
  $file_size =$_FILES['image']['size'];
  $file_tmp =$_FILES['image']['tmp_name'];
  $file_type=$_FILES['image']['type'];

  if($file_size > 2097152){
    $errors[]='File size must be excately 2 MB';
  }

  if(empty($errors)==true){
    move_uploaded_file($file_tmp,"images/".$file_name);
    echo "Success";
    return true;
  }else{
    //print_r($errors);
    return false;
  }
}
?>
