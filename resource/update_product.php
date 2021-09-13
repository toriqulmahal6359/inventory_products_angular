<?php
include('database.inc.php');
include('function.inc.php');

$post_data = file_get_contents("php://input");
if(isset($post_data) && !empty($post_data)){
    $request = json_decode($post_data, true);

    //validation_process
    if(trim($request['name']) || (float)$request['price'] < 0){
        return http_response_code(400);
    }

    $category_id = get_safe_value($request['category_id']);
    $name = get_safe_value(trim($request['name']));
    $price = get_safe_value((int)$request['price']);
    $brand = get_safe_value(trim($request['brand']));
    $added_on = date("Y-m-d h:i:s");

    $product_query = "UPDATE products SET category_id='$category_id' name='$name', price='$price', brand='$brand', added_on='$added_on' WHERE id='$id'";
    $result = $con->query($product_query);

    if(!empty($result)){
       http_response_code(204);
    }else{
       return http_response_code(422);
    }
}
?>