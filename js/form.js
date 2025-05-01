const firstNameElem = 
	document.querySelector("#first_name");

const lastNameElem = 
	document.querySelector("#last_name");

const emailElem = 
	document.querySelector("#email");

const phoneNumberElem = 
	document.querySelector("#phone_number");

const passwordElem = 
	document.querySelector("#pwd");

const confirmPasswordElem =
	document.querySelector("#confirm_password");

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
	
	const isPhoneNumberValid =
		checkPhoneNumber();
	
	const isPasswordValid =
		checkPassword();
	
	const doPasswordsMatch =
		confirmPassword();

		return isFirstNameValid
				&& isLastNameValid
				&& isEmailValid
				&& isPhoneNumberValid
				&& isPasswordValid
				&& doPasswordsMatch;

} // isValidData()

//================================================================================================

function checkFirstName(){

	const firstName =
		firstNameElem.value.trim();

	const pattern = 
		/^([A-Z]{1})([a-z]{3,15})$/;

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
			"The first name is invalid."

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
		/^([A-Z]{1})([a-z]{3,15})$/;

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
			"The last name is invalid.";

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
		/^[^@]+@[^@]+\.[^@]+$/;

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

//================================================================================================

function checkPhoneNumber(){

	const phoneNumber =
		phoneNumberElem.value.trim();

	const pattern =
		/^(\(\d{3})\)\s(\d{3})-(\d{4})$/;

	const regex =
		new RegExp(pattern);
	
	const matches =
		regex.test(phoneNumber);

	let isValid = false;

	const isEmpty =
		phoneNumber === "";
	
	let err = "";

	if(isEmpty){

		err = 
			"The phone number is required.";
		
		throw new Error(err);

	} // if

	else if(!matches){

		err =
			"Please enter a valid phone number."

		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // checkPhoneNumber()

//================================================================================================

function checkPassword(){

	const password =
		passwordElem.value.trim();

	const pattern =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	const regex =
		new RegExp(pattern);
	
	const matches =
		regex.test(password);
	
	const isEmpty =
		password === "";

	let isValid = false;
	
	let err = "";

	if(isEmpty){

		err =
			"The password is required.";
		
		throw new Error(err);

	} // if

	else if(!matches){

		err = 
			"Please enter a valid password.";

		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // checkPassword()

//================================================================================================

function confirmPassword(){

	const confirmPwd =
		confirmPasswordElem.value.trim();
	const pwd =
		passwordElem.value.trim();

	const isEmpty =
		confirmPwd === "";

	let err = "";

	let isValid = false;

	const doPasswordsMatch =
		confirmPwd === pwd;

	if(isEmpty){

		err = 
			"Please confirm your password."

		throw new Error(err);

	} // if

	else if(!doPasswordsMatch){

		err =
			"The passwords don't match.  Please try again.";

		throw new Error(err);

	} // else if

	else{

		isValid = true;

	} // else

	return isValid;

} // confirmPasswords()

//================================================================================================

function showError(message) {

	alert(message);

} // showError()

//================================================================================================

signUpBtnClick();
