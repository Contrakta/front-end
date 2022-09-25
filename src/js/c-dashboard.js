// Instancing the visibility status.
visibilityStatus = false;

// Instancing the user's balance element.
balanceValueElement = document.querySelector("#balance-value");

// Instacing the image.
eyeImage = document.querySelector(".viewer img");

// Setting up the user's balance value.
balance = Number(balanceValueElement.getAttribute("value"));

// Instancing the string.
balanceStr = String(balance);

// Creating the string array.
str = "";

// Final string.
finalStr = "";

// Populating the string array.
[...balanceStr].forEach(c => {

	str += c;
	finalStr += "•";

})


// Visibility controller.
visibilityController = document.querySelector(".viewer");

// Instacing the show function.
function show() {

	balanceValueElement.innerText = str;
	eyeImage.src = "../images/white__eye_on.svg";
	visibilityStatus = true;

}

// Instacing the hide function.
function hide() {

	balanceValueElement.innerText = finalStr;
	eyeImage.src = "../images/white__eye_off.svg";
	visibilityStatus = false;

}


// Adding a click event listener.
visibilityController.addEventListener("click", event => {

	if(visibilityStatus == false) {

		show();

	} else {

		hide();
		
	}

})