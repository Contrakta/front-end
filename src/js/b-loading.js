/*

O código abaixo é responsável por setar o intervalo de tempo em que os textos pré selecionados irão aparecer na tela

*/


let text = document.getElementById("loading-text");

var loading_text = window.setInterval(textinform, 3000);

let texts = [
    "Conecte suas contas bancárias em um só lugar.",
    "Compartilhe dados de dispositivos inteligentes.",
    "Receba produtos financeiros personalizados para você."
]

let currentText = 0;


function textinform() {

    text.textContent = texts[currentText];

    if(currentText > texts.length) {
        
        window.location.href="../html/c-dashboard.html"  

    } else {

        currentText++;

    }
}

textinform();




let number = document.getElementById("number-loading");

var loading_number = window.setInterval(numberinfo, 3000);

let numbers = [
    "1",
    "2",
    "3"
]

let currentNumber = 0;


function numberinfo() {

    number.textContents = numbers[currentNumber];

    if(currentNumber > numbers.length) {
        
        window.location.href="../html/c-dashboard.html"  

    } else {

        currentNumber++;

    }
}

numberinfo();
