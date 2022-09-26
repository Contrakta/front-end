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

// Setting up the continue button.
document.querySelector("#back-to-dashboard").addEventListener("click", event => {

	window.location.href = "http://localhost:5500/html/c-dashboard.html";

})