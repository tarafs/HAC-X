<?php 
include("header.php");
?>
<html>
	<head>
		<meta charset = "utf-8">	
	</head>
	<style>
		.button {
  display: inline-block;
  border-radius: 4px;
  background-color:#FCBF21;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
	</style>
	<body>
		<!-- Page content -->
<div class="w3-content" style="max-width:1100px">
	
	 <!-- order Section -->
  <div class="w3-row w3-padding-64" id="order">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center">Invitation</h1><br>
		<form action="#" method="post">
			
			<div class="input-group">
				<h4> Choose a Restaurant:</h4>
		<select name="restaurant" id="restaurant"class="w3-input w3-animate-input">
			<option> </option>
		  <option value="ff-white">Off-white</option>
		  <option value="lusin">Lusin</option>
		  <option value="section-B">Section-B</option>
		  <option value="lavash">Lavash</option>
		</select>
			</div>
		<br>
		<div class="input-group">
		<h4>Select a Day:</h4>
			<select name="day" id="day"class="w3-input w3-animate-input">
				<option> </option>
		  <option value="ff-white">Saturday</option>
		  <option value="lusin">Sunday</option>
		  <option value="section-B">Monday</option>
		  <option value="lavash">Tuesday</option>
		   <option value="lavash">Wednesday</option>
		    <option value="lavash">Thursday</option>
			 <option value="lavash">Friday</option>
		</select>
		</div>
		 	  <div class="input-group">
		<h4>Select a Time:</h4>
			<input class="w3-input w3-animate-input" type="time" id="appt" name="appt"style="width:5%">
		</div>
		<br>
		<div class="input-group">
	   <h4>Choose Your Friend </h4>
			<input id="friend" name = "friend" type = "text" placeholder="  Enter friend's email"class="w3-input w3-animate-input"style="width:5%" > 
			</div>
		<br>
		<br>
	<button id="invite" name="invite" class="button" type= "submit" style="vertical-align:middle" ><span>Invite</span></button>
		  
		</form>
		</div>
		 <div class="w3-col l6 w3-padding-large">
      <img src="pies.gif" class="w3-round w3-image w3-opacity-min" alt="pies" style="width:100%">
    </div>
		    </div>
  </div>

  
	 <?php
       ?>
<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-32">
  <p>Powered by <a href="https://twitter.com/rooof880?lang=en" title="twitter" target="_blank" class="w3-hover-text-yellow">SWE For Development</a></p>
</footer>
	</body>
         
</html>