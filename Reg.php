?php

include('CONN.php');
session_start();

$error = array();
if($_SERVER['REQUEST_METHOD']=='POST')
{
	
	if(isset($_POST['reg_user'])) {
		
		
		$username = mysqli_real_escape_string($con, $_POST['username']);
		$email = mysqli_real_escape_string($con, $_POST['email']);
		$password = mysqli_real_escape_string($con, $_POST['password']);

		$user_check_query = "SELECT * FROM MyGuest WHERE username='$username' AND email='$email' LIMIT 1";
		$result = mysqli_query($con, $user_check_query);
		$user = mysqli_fetch_assoc($result);
		
		if($user){
			
			echo"Username already exists";
			header('location: login.html');			
		}
		if( $user ==0){
			$query = "INSERT INTO MyGuest (username, email, password) VALUES('$username', '$email', '$password')";
			mysqli_query($con, $query);
			$_SESSION['username'] = $username;
			echo"you are now registered";
			header('location: login.html');
			
		}	
			
	}
	
}
	
	
	

	
?>
