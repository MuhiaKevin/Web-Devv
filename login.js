//archerkreiger@gmail.com

// Generate html dynamically

function go_to_goodsite() {

		window.location = "file:///C:/Users/Allan/Desktop/BIT%20notes/2.1/Project%20to%20submit/html/Index_Main.html"
}


function disablesecondbutton() {
	var loginButton = document.getElementById('loginBtn').disabled = false;

	// var SignUpButton = document.getElementById('signUpBtn').disabled = true;
	var SignUpButton = document.getElementById('signUpBtn');

    var formLogin = document.getElementById('loginForm');
    
	SignUpButton.style.visibility = 'hidden';
	formLogin.innerHTML = '<ul>'+
								'<li>'+
								  '<input type="text" id="user" name="username" placeholder="Username">'+
								'</li>'+
								'<li>'+
								  '<input type="password" id= "pass1" name="pass1" placeholder="Password">'+
								'</li>'+
								'<li>'+
								  '<button type="button" id="sendlogin" class="btn btn-success" onclick="go_to_goodsite()" >Submit</button>'	
						  		'</li>'+	
						  '</ul>'
}

function disablefirstbutton() {
		
	window.location = 'file:///C:/Users/Allan/Desktop/BIT%20notes/2.1/Project%20to%20submit/html/SignUp.html'

}