const getStartedBtn = document.querySelector("#get-started-btn");

getStartedBtn.addEventListener("click", event => {

	window.location.href = "http://localhost:5500/html/b-loading.html";
	
})

// Setting the user id.
// This allow us to test the application without a sign-up service
// or a tokenization system.
sessionStorage.setItem("user-id","59ddea63-a47f-4e1c-976a-47e41ad11be1");