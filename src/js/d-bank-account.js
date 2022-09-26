const userId = sessionStorage.getItem("user-id");
const bankAccountList = document.querySelector("#bank-accounts");

var settings = {
	"url": `http://localhost:1337/api/v1/user/${userId}`,
	"method": "GET",
	"timeout": 0,
};

$.ajax(settings).done(function (response) {

	const bankAccounts = response.success.data.bank_account;

	let i = 1;

	bankAccounts.forEach(bank_account => {

		bankAccountList.innerHTML += `
		
			<!-- Conta bancária com informações de pagamento -->
			<div class="bank-payment-method already-selected" value="${i}">
				
				<div class="bank-info">
					<p class="bank-name">${bank_account.compe_code} - ${bank_account.bank_name}</p>
					<span class="info"><span class="agency">${bank_account.branch_code}</span>⠀<span class="number"> ${bank_account.number} </span></span>
				</div>
				
			</div>
		
		
		`

	})
	

});