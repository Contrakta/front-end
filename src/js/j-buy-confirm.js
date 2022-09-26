// Selecting all dynamic elements.
const segment = document.querySelector("#segment");
const plan = document.querySelector("#plan");
const id = document.querySelector("#id");
const description = document.querySelector("#description");
const montlyPrice = document.querySelector("#montly-price");

// Grabbing all data saved on session storage.
const preOrder = JSON.parse(sessionStorage.getItem("pre-order"));

// Setting all dynamic elements.
segment.textContent = preOrder.product.segment;
plan.textContent = preOrder.product.plan;
id.textContent = preOrder.product.id;
description.textContent = preOrder.product.description;
montlyPrice.textContent = preOrder.product.montly_price;

preOrder.paymentInfo = JSON.parse(preOrder.paymentInfo);

const bankName = document.querySelector("#bank-name");

bankName.textContent = `${preOrder.paymentInfo.compe_code} - ${preOrder.paymentInfo.bank_name}`

document.querySelector("#card-price").innerText = preOrder.product.montly_price;

// Setting up the continue button.
document.querySelector("#contract-now-btn").addEventListener("click", event => {

	axios.post('http://localhost:1337/api/v1/product/998738a1-3f3d-4173-8069-abbfd0001d43/buy', {

		customer_id: "59ddea63-a47f-4e1c-976a-47e41ad11be1",
		payment_info: [
			{
				bank_account_id: "dc21ccc2-a32c-4d51-b591-8c014c830bef", 
				percentage:1
			}
		]
	})
	  .then(function (response) {

		console.log(response);
		  
		window.location.href = "http://localhost:5500/html/k-congrats.html"

	  })
	  .catch(function (error) {

		console.log(error);
		
	  });

})