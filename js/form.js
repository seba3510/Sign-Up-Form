const firstNameElem = 
	document.querySelector("#first_name");

const lastNameElem = 
	document.querySelector("#last_name");

const emailElem = 
	document.querySelector("#email");

const phoneNumberElem = 
	document.querySelector("#phoneNumber");

const passwordElem = 
	document.querySelector("#pwd");

const signUpBtnElem = 
	document.querySelector("#sign-up-btn");

//================================================================================================

function signUpBtnClick() {

	signUpBtnElem.addEventListener("click", (event) => {

		event.preventDefault();

		try {

		if (isDataValid()) {

			const msg = 
				"You have signed up successfully!";

			alert(msg);

		} // if
			
		} // try
		
		catch (error) {

			const err =
				error.message;

			showError(err);
			
		} // catch

	}); // addEventListener()

} // signUpBtnClick()

//================================================================================================

function isDataValid() {

	const isFirstNameValid =
		checkFirstName();

	const isLastNameValid =
		checkLastName();

	const isEmailValid =
		checkEmail();

		return isFirstNameValid
				&& isLastNameValid
				&& isEmailValid;

} // isValidData()

//================================================================================================

function checkFirstName(){

	const firstName =
		firstNameElem.value.trim();

	const pattern = 
		"^([A-Z]{1})([a-z]{3,15})$";

	const regex =
		new RegExp(pattern);

	const matches =
		regex.test(firstName);

	let isValid = false;

	const isEmpty =
		firstName === "";

	let err = "";

	if(isEmpty){

		err =
			"The first name is required.";

		throw new Error(err);

	} // if

	else if(!matches){

		err =
			`The first name must begin with an uppercase letter, and must be between 3 and 15 characters.`;

		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // checkFirstName()

//================================================================================================

function checkLastName(){

	const lastName =
		lastNameElem.value.trim();

	const pattern = 
		"^([A-Z]{1})([a-z]{3,15})$";

	const regex =
		new RegExp(pattern);

	const matches =
		regex.test(lastName);

	let isValid = false;

	const isEmpty =
		lastName === "";

	let err = "";

	if(isEmpty){

		err =
			"The last name is required.";

		throw new Error(err);

	} // if

	else if(!matches){

		err =
			"The last name must begin with an uppercase letter, and must be between 3 and 15 characters.";

		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // checkLastName()

//================================================================================================

function checkEmail(){

	const email =
		emailElem.value.trim();

	const pattern =
		"^[^@]+@[^@]+\.[^@]+$";

	const regex =
		new RegExp(pattern);

	const matches =
		regex.test(email);

	const isEmpty =
		email === "";

	let err = "";

	let isValid = false;

	if(isEmpty){

		err = 
			"The email address is required.";

		throw new Error(err);

	} // if

	else if(!matches){

		err = 
			"Please enter a valid email address.";
		
		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // checkEmail()


function showError(message) {
	alert(message);
} // showError()

signUpBtnClick();
