<?php
  class News {
    private $conn;
    private $table = "News";
    private $table2 = "NewsCompanies";

    public $id;
    public $title;
    public $content;
    public $image_path;
    public $type;
    public $like_count;
    public $dislike_count;
    public $view_count;
    public $date_time;
    public $company_name;
    public $company_image;

    public function __construct($db){
      $this->conn = $db;
    }
    function read(){

      // select all query
      $query = "SELECT tb1.id as id, tb1.title as title, tb1.content as content, tb1.image_path as image_path, tb1.type as type,
                tb1.like_count as like_count, tb1.dislike_count as dislike_count, tb1.view_count as view_count, tb2.company_name as company_name, tb2.company_image as company_image,
                DATE_FORMAT(tb1.date_time, '%m/%d/%Y %H:%i') as date_time  FROM " . $this->table ." as tb1 , " . $this->table2 . " as tb2 WHERE tb1.company_id = tb2.company_id";

      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      return $stmt;
    }

    function update($value, $user_id){
      $query = "UPDATE " . $this->table . " SET $value = $value + 1 WHERE id = " . $user_id;
      $stmt = $this->conn->prepare($query);
      $stmt->execute();
    }
  }
 ?>
