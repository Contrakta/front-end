// Selecting all dynamic elements.
const segment = document.querySelector("#segment");
const plan = document.querySelector("#plan");
const id = document.querySelector("#id");
const description = document.querySelector("#description");
const montlyPrice = document.querySelector("#montly-price");

// Grabbing all data saved on session storage.
const product = JSON.parse(sessionStorage.getItem("product"));

// Setting all dynamic elements.
segment.textContent = product.segment;
plan.textContent = product.plan;
id.textContent = product.id;
description.textContent = product.description;
montlyPrice.textContent = product.montly_price;

// Grabbing all user bank accounts from database.

const bankName = document.querySelector("#bank-name");

let strBankName = '';

const userId = sessionStorage.getItem("user-id");

var settings = {
	"url": `http://localhost:1337/api/v1/user/${userId}`,
	"method": "GET",
	"timeout": 0,
};

$.ajax(settings).done(function (response) {

	// Saving the user's first bank account on session storage (MVP reason).
	sessionStorage.setItem("payment-info", JSON.stringify(response.success.data.bank_account[0]))

	// Setting up the bank name
	strBankName = response.success.data.bank_account[0].compe_code;
	strBankName += ` ${response.success.data.bank_account[0].bank_name}`;
	bankName.innerText = strBankName;

	document.querySelector("#card-price").innerText = product.montly_price;

});

// Setting up the continue button.
document.querySelector("#contract-now-btn").addEventListener("click", event => {

	preOrder = {
		product,
		paymentInfo: sessionStorage.getItem("payment-info"),
	}

	sessionStorage.setItem("pre-order",JSON.stringify(preOrder));
	window.location.href = "http://localhost:5500/html/j-buy-confirm.html";

})