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