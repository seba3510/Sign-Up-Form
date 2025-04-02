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

	signUpBtnElem.addEventListener("click", () => {

		try {

			const isDataValid = 
			isValidData();

		if (isDataValid) {

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

function isValidData() {

	const firstName = 
		firstNameElem.value;

	const firstNameErr =
		"The first name";

	const isFirstNameValid =
		isValidPattern
		(
			firstName,
			firstNameErr
		);

		return isFirstNameValid;

} // isValidData()

//================================================================================================

function isValidPattern(str, name) {

	const pattern = 
		"^([A-Z]{1})([a-z]+)$";

	const regex =
		new RegExp(pattern);

	const matches =
		regex.test(str);

		if(!matches){

			const errorMsg =
				`${name} is invalid.`

			throw new Error(errorMsg);

			return false;

		} // if

	return true;
} // isValidPattern()

//================================================================================================

function showError(message) {
	alert(message);
} // showError()

signUpBtnClick();
