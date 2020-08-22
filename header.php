<?php 
include("server.php");
?>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<!-- CSS Style -->
<style>
body {font-family: "Times New Roman", Georgia, Serif;}
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}
.sign-out span {
  font-size: 15px;
  color: wheat;
}
.sign-out a {
  float: right;
  color: white;
  background: red;
  border-radius: 3px;
  font-size: 13px;
  padding: 0px 7px;
}
</style>

<!-- Navbar (sit on top) -->
<div class="w3-top" id="home">
  <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:4px;">
    <img onclick="window.location.href='home-page.php';" src="logo2.png" alt="logo" width="150" height="150"class="w3-bar-item w3-button">
<br><h1>Love Eat</h1>
    <!-- Right-sided navbar links. Hide them on small screens -->
    <div class="w3-right ">
     <h2> <a href="#about" class="w3-bar-item w3-button">About</a>
      <a href="#sign" class="w3-bar-item w3-button">Sign In</a>
      <a href="#contact" class="w3-bar-item w3-button">Contact</a></h2>
     <?php 
    function check_user(){
      global $_SESSION;
      if(isset($_SESSION['email'])){
          return true;
      }else{
          return false;
      }
    }
  
    if(check_user()){ // Display Line sign out , welcome for user
//      $e=$_SESSION['email'];
//      $query_1 = "SELECT * FROM user	WHERE email='$email'";
//			
//			$results_1 = mysqli_query($db, $query_1);
//      $results_1= mysqli_fetch_array($results_1);
  ?>
  	<div class="sign-out"><span>Welcome to Love Eat! </span>   <a href='logout.php' class="sign-out">sign out</a></div>
  

  <?php
    }
  ?>
    </div>
  </div>
</div>

<!-- Header -->
<header class="w3-display-container w3-content w3-wide" style="max-width:1600px;min-width:500px" id="home">
  <img class="w3-image" src="yellow-macron.jpg" alt="Hamburger Catering" width="1600" height="500">
  <div class="w3-display-bottomleft w3-padding-large w3-opacity">
    <h1 class="w3-xxlarge">Good Friend With Good Food</h1>
  </div>
</header>
</div>