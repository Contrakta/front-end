transactionHash = document.querySelector("#transaction_hash");
requestDate = document.querySelector("#request_date");
confirmDate = document.querySelector("#confirm_date");
durantionTime = document.querySelector("#duration_time_in_months");

console.log(transactionHash);

contract = JSON.parse(sessionStorage.getItem("contract"));

const node = document.createElement("a");

node.href=`https://goerli.etherscan.io/address/${contract.transaction_hash}`

node.target = "_blank"

node.style = "font-size: 1.5rem; color: var(--primary)"

node.textContent = contract.transaction_hash;

transactionHash.appendChild(node);

requestDate.textContent = contract.request_date;
confirmDate.textContent = contract.confirm_date;
durantionTime.textContent = contract.duration_time_in_months;
