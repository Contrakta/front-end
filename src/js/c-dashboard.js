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

// Get the user ID from session storage.
const userId = sessionStorage.getItem("user-id");

// Getting all user active contracts.
var settings = {
	"url": `http://localhost:1337/api/v1/user/${userId}/contracts`,
	"method": "GET",
	"timeout": 0,
};

const contractSection = document.querySelector("#contracts");

// Counter
let i = 1;
  
$.ajax(settings).done(function (response) {

	response.success.data.forEach(contract => {

		contractSection.innerHTML += `
		
			<div class="contract-card" id="contract-${i}">
				<div class="left">
					<div class="title">
						<span class="area" id="contract-id">${contract.id}</span>
						<span class="service-name" id="contract-hash">${contract.transaction_hash}+</span>
					</div>
					<span class="coverage" id="contract-condition">${contract.conditions}</span>
				</div>
				<div class="right">
					<span class="price" id="contract-duration">${contract.duration_time_in_months} meses</span>
					<span class="time" id="contract-request-date">${contract.request_date}</span>
				</div>
			</div>
		
		`

		document.querySelector(`#contract-${i}`).addEventListener("click", event => {

			sessionStorage.setItem("contract", JSON.stringify(contract));
			
			window.location.href = "http://localhost:5500/html/l-contract.html";

		})

	})
});

// Menu controllers

const productsMenuItem = document.querySelector("#products");

productsMenuItem.addEventListener("click", event => {
	
	window.location.href = "http://localhost:5500/html/g-shop.html";

})

const dashboardMenuItem = document.querySelector("#dashboard");

dashboardMenuItem.addEventListener("click", event => {
	
	window.location.href = "http://localhost:5500/html/c-dashboard.html";

})

const settingsMenuItem = document.querySelector("#settings");

settingsMenuItem.addEventListener("click", event => {
	
	window.location.href = "http://localhost:5500/html/m-settings.html";

})

document.querySelector("#wallet").addEventListener("click", event => {

	window.location.href = "http://localhost:5500/html/d-bank-account.html"

})

document.querySelector("#devices").addEventListener("click", event => {

	window.location.href = "http://localhost:5500/html/e-devices.html"

})