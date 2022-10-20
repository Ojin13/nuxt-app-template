<?php
    header("Access-Control-Allow-Origin:  *");
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, X-WP-Nonce, Content-Type, Accept, Authorization, Cache-Control');
    
    require_once "database_auth.php";

    global $pdo;
    connectToDb();


    $request_body = json_decode(file_get_contents('php://input'));
    $data_i_received = $request_body->data;


    $arr = array();
    
    $arr_len = rand(1,10);
    for ($i = 0; $i < $arr_len; $i++){
        $arr["key ".$i] = array(
            "name" => $i,
            "value" => $i
        );
    }

    $output = array(
        "id" => 42,
        "data_sets" => $arr
    );
    
    header('Content-type: application/json');
    echo json_encode($output);

?>
