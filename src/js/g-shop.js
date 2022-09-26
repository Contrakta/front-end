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

// Available products list.
const productList = document.querySelector("#available-products");


// Getting all available products.

var settings = {
	"url": "http://localhost:1337/api/v1/product",
	"method": "GET",
	"timeout": 0,
};


// Counter;
i = 0;
  
$.ajax(settings).done(function (response) {
	response.success.data.forEach(product => {

		console.log(product);

		productList.innerHTML += `
		
			<!-- Cartões de seguro -->
			<div class="conections" id="card-${i}">
				<div class="left">
					<div class="sameLine">
						<span class="assurance-category">${product.segment}</span>
						<span class="modelo">${product.plan}</span>
					</div>
					<span class="percentage">${product.description}</span>
				</div>
				<div class="right">
					<p class="price">R$${product.montly_price} mês</p>
				</div>
			</div>
		
		`

		document.querySelector(`#card-${i}`).addEventListener("click", event => {

			sessionStorage.setItem("product",JSON.stringify(product));
			window.location.href = "http://localhost:5500/html/h-buy.html";

		})


	})
});

