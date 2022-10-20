<?php
    header("Access-Control-Allow-Origin:  *");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, X-WP-Nonce, Content-Type, Accept, Authorization, Cache-Control');

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

    require_once "database_auth.php";

    global $pdo;
    connectToDb();
    $user_id = $_POST["user_id"];




    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    $newFileName = $target_dir.$user_id.".".$imageFileType;

    // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["user_image"]["tmp_name"]);
    if($check !== false) {
    } else {
        //echo "not image";
        exit;
    }

    
    // Check if file already exists
    if (file_exists($newFileName)) {
        echo "Sorry, file already exists.";
        exit;
    }
    

    // Check file size
    if ($_FILES["user_image"]["size"] > 500000) {
        exit;
    }

    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
        exit;
    }

    if (move_uploaded_file($_FILES["user_image"]["tmp_name"], $newFileName)) {
        $data = $pdo->prepare("INSERT INTO users_media (user_id, media_url, is_default) VALUES (?,?,?)");
        $data->execute([$user_id, $newFileName, 1]);
        echo $pdo->lastInsertId();
        exit;
    }else{
        exit;
    }
?>
