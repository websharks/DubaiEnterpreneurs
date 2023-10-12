const mainCont = document.querySelector(".container");
const thankYou = document.querySelector(".thank_you");
const submit_btn = document.querySelector(".submit-btn");
const dismiss_btn = document.querySelector(".dismiss-btn");
const error_text = document.querySelector(".error-text");
const postEmail = document.querySelector(".post_email");
const email_input = document.querySelector("#email");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Event listener for focus out of the email input
email_input.addEventListener("focusout", () => {
	if (!emailRegex.test(email_input.value)) {
		// Display error text and add error-input class for styling
		error_text.style.display = "block";
		email_input.classList.add("error-input");
	} else {
		// Hide error text and remove error-input class
		error_text.style.display = "none";
		email_input.classList.remove("error-input");
	}
});

// Event listener for focus in on the email input
email_input.addEventListener("focusin", () => {
	// Hide error text and remove error-input class on focus
	error_text.style.display = "none";
	email_input.classList.remove("error-input");
});

// Event listener for submit button click
submit_btn.addEventListener("click", () => {
	if (!emailRegex.test(email_input.value)) {
		// Handle invalid email input (you can add specific logic here)
	} else {
		// Hide the main container, display thank you message, and show the submitted email
		mainCont.style.display = "none";
		thankYou.style.display = "grid";
		postEmail.innerText = email_input.value;
	}
});

// Event listener for dismiss button click in the thank you message
dismiss_btn.addEventListener("click", () => {
	// Show the main container and hide the thank you message
	mainCont.style.display = "flex";
	thankYou.style.display = "none";
});
