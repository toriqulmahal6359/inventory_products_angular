<?php
include('database.inc.php');
include('function.inc.php');

if(isset($_GET['id']) && $_GET['id'] > 0){
    $id = get_safe_value($_GET['id']);
}else{
    return false;
}

$product_query = "DELETE * FROM products WHERE id='$id'";
$result = $con->query($product_query);

if(!empty($result)){
   http_response_code(204);
}else{
   return http_response_code(422);
}

?>