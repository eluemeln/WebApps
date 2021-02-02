<?php

include('CONN.php');


$errors = array();
if($_SERVER['REQUEST_METHOD']=='POST')
{
	
	if(isset($_POST['log_user'])) 
	{
		
		
		$username = mysqli_real_escape_string($con, $_POST['username']);
		$password = mysqli_real_escape_string($con, $_POST['password']);
		
		
		$query = "SELECT * FROM MyGuest WHERE username='$username' AND password='$password'";
		
		$result = mysqli_query($con, $query);
		$count = mysqli_fetch_array($result);
		if($count['username']==$username && $count['password']== $password)
		{
			$_SESSION['username'] = $username;
			echo" you have successfully login";
			header('location: index.html');
		}
		else{
			
			echo"failed to login";
			
		}
			
				
				
			


			
		
		
				
				
	
  	
	
	}
	
}	
		
		
		
?>
