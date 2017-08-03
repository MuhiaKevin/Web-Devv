
function validate() {
	
	// create a data object that saves the values 

	var data = {
		
		first_name : document.getElementById('first').value,
		last_name : document.getElementById('last').value,
		user_email : document.getElementById('email').value,
		passw : document.getElementById('pass').value,
		repassw : document.getElementById('repass').value,
	}; 	

	var errors = [];

	// check if name is empty

	if (data.first_name == "") {

		// push the message to the error array

		errors.push('[!] Empty first name')

	} 

	//  check if last name is empty

	if(data.last_name == "") {
		errors.push('[!] Empty last name')
	}

	// check if the first name is empty

	if(data.user_email == "") {
		errors.push('[!] Empty email')
	}

	// check if the first password is empty

	if(data.passw == "") {
		errors.push('[!] Empty password')
	}

	// check if the repeated password is empty

	else if(data.repassw == "") {
		errors.push('[!] Passwords Dont match')
	}

	// Check that the two passwords match 

	else if (data.passw == data.repassw) {
		errors.push('[!] Passwords Dont match')
	} else {
		return true;
	}

	// create a message varable that will display the string error 

	var msg = 'Errors: \n\n'

	// loop through all the errors and concatenate them with the msg variable  

	for (var i = 0; i < errors.length; i++) {
		msg+=errors[i]+'\n';	
	}

	// display the msg together with all the msg stored

	alert(msg)

}

var subbmit = document.getElementById('submit_btn')

subbmit.addEventListener('click', validate)