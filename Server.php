carrier VARCHAR(30),
reg_date TIMESTAMP DEFAULT
CURRENT_TIMESTAMP ON UPDATE 
CURRENT_TIMESTAMP
)";

if ($con->query($q)==TRUE) {
    echo "Table MyTable created successfully";
}
 /*
else {
    echo "Error creating table: ".$con->error;
}
*/

$que = "CREATE TABLE User(
id INT(6) NOT NULL AUTO_INCREMENT,PRIMARY KEY(id),
name VARCHAR(10),
code VARCHAR(40),
price double(9,2),
image VARCHAR(100),
reg_date TIMESTAMP DEFAULT
CURRENT_TIMESTAMP ON UPDATE 
CURRENT_TIMESTAMP
)";
if ($con->query($que)==TRUE) {
    echo "This Table created successfully";
}

/* 
else {
    echo "Error creating table: ".$con->error;
}
*/
?>
