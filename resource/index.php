<?php
include('database.inc.php');

$item = [];
$product_query = "SELECT products.* , categories.category FROM products, categories WHERE products.category_id = categories.id AND products.status = '1'";
$result = $con->query($product_query);

if($result){
    $i = 0;
    while($product_row = $result->fetch_array(MYSQLI_ASSOC)){
        $item[$i]['id'] = $product_row['id'];
        $item[$i]['name'] = $product_row['name'];
        $item[$i]['category'] = $product_row['category'];
        $item[$i]['price'] = $product_row['price'];
        $item[$i]['brand'] = $product_row['brand'];
        $item[$i]['added_on'] = $product_row['added_on'];
        $i++;
    }
    echo json_encode($item);
}else{
    http_response_code(404);
}

?> 