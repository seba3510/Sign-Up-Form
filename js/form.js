const firstNameElem = document.querySelector("#first_name");

const lastNameElem = document.querySelector("#last_name");

const emailElem = document.querySelector("#email");

const phoneNumberElem = document.querySelector("#phoneNumber");

const passwordElem = document.querySelector("#pwd");

const signUpBtnElem = document.querySelector("#sign-up-btn");

//================================================================================================

function signUpBtnClick() {
	signUpBtnElem.addEventListener("click", () => {
		const msg = "You have clicked me!";

		alert(msg);
	});
} // signUpBtnClick()

signUpBtnClick();
