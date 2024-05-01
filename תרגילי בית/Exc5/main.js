const displayElem = document.getElementById("inputDisplay");
const numbersElem = document.querySelectorAll(".numbers button");
const equalBtnElem = document.getElementById("equalBtn");
const clearElem = document.getElementById("clearBtn");
const opElem = document.getElementsByClassName("operator");
let resultDisplayed = false;
let operator, inputNum1, inputNum2;
const filteredNumberElem = Array.from(numbersElem).filter(
  (element) => element.id !== "clearBtn"
);

function getSecondNumber(strInput, op) {
  return +strInput.slice(strInput.indexOf(op) + 1);
}

function calcMathString(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      break;
  }
}

for (let i = 0; i < filteredNumberElem.length; i++) {
  filteredNumberElem[i].addEventListener("click", (event) => {
    if (resultDisplayed) {
      resultDisplayed = false;
      displayElem.innerText = event.target.innerText;
    } else {
      displayElem.innerText += event.target.innerText;
    }
  });
}

for (let i = 0; i < opElem.length; i++) {
  opElem[i].addEventListener("click", (event) => {
    if (resultDisplayed) {
      resultDisplayed = false;
    }
    inputNum1 = +displayElem.innerText;
    operator = event.target.innerText;
    displayElem.innerText += event.target.innerText;
  });
}
equalBtnElem.addEventListener("click", () => {
  resultDisplayed = true;
  inputNum2 = getSecondNumber(displayElem.innerText, operator);
  displayElem.innerText = calcMathString(inputNum1, inputNum2, operator);
});
clearElem.addEventListener("click", () => {
  inputNum1, inputNum2, (operator = null);
  displayElem.innerText = "";
});
