<?php
include ('CONN.php');


$Sq = "CREATE TABLE MyGuest(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT
CURRENT_TIMESTAMP ON UPDATE 
CURRENT_TIMESTAMP
)";

if ($con->query($Sq) === TRUE) {
    echo "Table MyGuests created successfully";
} 
else {
    echo "Error creating table: ".$con->error;
}


?>
