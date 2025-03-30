const firstNameElem = document.querySelector("#first_name");

const lastNameElem = document.querySelector("#last_name");

const emailElem = document.querySelector("#email");

const phoneNumberElem = document.querySelector("#phoneNumber");

const passwordElem = document.querySelector("#pwd");

const signUpBtnElem = document.querySelector("#sign-up-btn");

//================================================================================================

function signUpBtnClick() {
	signUpBtnElem.addEventListener("click", () => {
		let isDataValid = isValidData();

		if (isDataValid) {
			alert("Successful log in");
		} // if
	}); // addEventListener()
} // signUpBtnClick()

//================================================================================================

function isValidData() {
	const firstNameString = firstNameElem.value;

	const lastNameString = lastNameElem.value;

	let isFirstNameValid = isFirstNameValid(firstNameString);

	let isLastNameValid = isLastNameValid(lastNameString);

	return isFirstNameValid && isLastNameValid;
} // isValidData()

//================================================================================================

function isFirstNameValid(firstName) {
	const pattern = "^([A-Z]{1})([a-z]+)$";

	const matches = str.match(pattern);

	if (!matches) {
		const err = "Invalid first name.";

		showError(err);

		return false;
	} // if

	return true;
} // isValidPattern()

//================================================================================================

function isLastNameValid(lastName) {
	const pattern = "^([A-Z]{1})([a-z]+)$";

	const matches = str.match(pattern);

	if (!matches) {
		const err = "Invalid last name.";

		showError(err);

		return false;
	} // if

	return true;
} // isLastNameValid()

//================================================================================================

function showError(message) {
	alert(message);
} // showError()

signUpBtnClick();
