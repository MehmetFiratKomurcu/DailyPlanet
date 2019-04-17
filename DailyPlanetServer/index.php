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
  <div class="jumbotron text-center" style="margin-bottom:0; height: 30px;">
    <h1 style="margin-top: -25px">News Record</h1>
  </div>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="index.php">Record</a>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
  </nav>
  <div class="container text-primary" style="height: 100px; margin-top: 30px" >
    <form action="news_insert.php" class="was-validated" method="post" enctype="multipart/form-data">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" placeholder="Enter a title." name="title" required>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea type="textarea" class="form-control" id="content" placeholder="Enter news content." name="content" rows="5" required></textarea>
        <div class="valid-feedback">Valid.</div>
        <div class="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group">
        <label for="content">Type of news:</label>
        <select class="form-control" name="news_type">
          <option>Ekonomi</option>
          <option>Spor</option>
          <option>Siyaset</option>
          <option>Yaşam</option>
          <option>Gündem</option>
          <option>Eğitim</option>
        </select>
      </div>
      <div class="form-group">
        <label for="content">Company:</label>
        <select class="form-control" name="news-companies">
          <option value=1>CNN Türk</option>
          <option value=3>Haber Türk</option>
          <option value=4>Hürriyet</option>
          <option value=5>Milliyet</option>
          <option value=6>Sözcü</option>
        </select>
      </div>
      <div class="form-group">
        <label for="form-control-file">Image (Only .jpg .png .gif and .bmp extensions supported.)</label>
        <input type="file" class="form-control-file" name="image" accept=".jpg, .gif, .png., .bmp" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>
</html>
