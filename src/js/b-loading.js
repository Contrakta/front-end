// Current page number element
currentPageNumberElement = document.querySelector("#current-page-number");

// Current page headline element
currentPageHeadlineElement = document.querySelector(".headline"); 

// Step counter.
i = 0;

stages = [
	{
		pageNumber: 1,
		headline: "Conecte suas contas bancárias em um só lugar."
	},
	{
		pageNumber: 2,
		headline: "Compartilhe dados de dispositivos inteligentes."
	},
	{
		pageNumber: 3,
		headline: "Receba produtos financeiros personalizados para você."
	}
]


// Instancing the sleep function.
async function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}


async function exec() {

	// Setting the first stage.
	currentPageNumberElement.innerText = stages[i].pageNumber;
	currentPageHeadlineElement.innerText = stages[i].headline;
	i++;

	// Sleeping for 2 seconds.
	await sleep(2000)

	// Setting the second stage.
	currentPageNumberElement.innerText = stages[i].pageNumber;
	currentPageHeadlineElement.innerText = stages[i].headline;
	i++;

	// Sleeping for 2 seconds.
	await sleep(2000)

	// Setting the second stage.
	currentPageNumberElement.innerText = stages[i].pageNumber;
	currentPageHeadlineElement.innerText = stages[i].headline;

	// Sleeping for 2 seconds.
	await sleep(2000)

	// Redirecting...
	window.location.href = "http://localhost:5500/html/c-dashboard.html"

}

exec();

