let rngArray = createUniqueArray();
let guessCounter = 0;
document.getElementById("forfeitBtn").addEventListener("click", () => {
  printRNGDisplay(rngArray);
  restartGame();
});
document.getElementById("guessBtn").addEventListener("click", handleGuessClick);
digitBtnElem = document.getElementsByClassName("userNumDigit");
for (let i = 0; i < digitBtnElem.length; i++) {
  digitBtnElem[i].addEventListener("click", (event) => {
    let val = +event.target.innerText;
    if (val === 9) {
      val = 0;
    } else {
      val++;
    }
    event.target.innerText = val;
  });
}

function resetDigitBtnValues() {
  for (let i = 0; i < digitBtnElem.length; i++) {
    digitBtnElem[i].innerText = i;
  }
}

function createUniqueArray() {
  const arr = [];
  while (arr.length < 4) {
    const rng = Math.floor(Math.random() * 10);
    if (arr.length == 0) {
      arr.push(rng);
      continue;
    }
    let validRNG = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === rng) {
        validRNG = false;
        break;
      }
    }
    if (validRNG) {
      arr.push(rng);
    }
  }
  return arr;
}

function printRNGDisplay(arr) {
  clearDynamicSection();
  document.getElementById(
    "rngDisplay"
  ).innerHTML = `<h2>The secret number was:</h2><h3 id="rngNumber"><h3>`;
  arr.forEach((digit) => {
    document.getElementById("rngNumber").innerText += digit;
  });
}

function clearRNGDisplay() {
  document.getElementById("rngDisplay").innerHTML = "";
}

function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        return false;
      }
    }
  }
  return true;
}

function clearDuplicateError() {
  document.getElementById("errorDisplay").innerHTML = "";
}

function printDuplicateError() {
  document.getElementById(
    "errorDisplay"
  ).innerHTML = `<h2>Error: Duplicates detected!<h2>`;
}

function getUserArray() {
  userNumElements = document.getElementsByClassName("userNumDigit");
  const userArray = [];
  for (let i = 0; i < userNumElements.length; i++) {
    userArray.push(+userNumElements[i].innerText);
  }
  return userArray;
}

function printGuessAndResult(result, guessArr) {
  document.getElementById(
    "resultDisplay"
  ).innerHTML = `<h2 id="bullsTxt">Bulls:${result.bulls}</h2><h2 id="cowsTxt">Cows:${result.cows}</h2>`;
  document.getElementById("historyTitle").style.visibility = "visible";
  document.getElementById(
    "guessHistory"
  ).innerHTML += `<div class="userGuessDisplay"></div>`;
  guessArr.forEach((item) => {
    displayElem = document.getElementsByClassName("userGuessDisplay");
    guessDisplay = displayElem[displayElem.length - 1];
    guessDisplay.innerHTML += `<div class="userGuessDisplayDigit">${item}</div>`;
  });
}

function getArraysCalc(arr1, arr2) {
  const calcResult = { bulls: 0, cows: 0 };
  for (let i = 0; i < arr1.length; i++) {
    digitIndex = arr2.indexOf(arr1[i]);
    if (digitIndex != -1) {
      if (digitIndex === i) {
        calcResult.bulls++;
      } else {
        calcResult.cows++;
      }
    }
  }
  return calcResult;
}

function clearDynamicSection() {
  document.getElementById("resultDisplay").innerHTML = "";
  clearDuplicateError();
  document.getElementById("historyTitle").style.visibility = "hidden";
  document.getElementById("guessHistory").innerHTML = "";
  document.getElementById("winStr").style.visibility = "hidden";
}

function restartGame() {
  resetDigitBtnValues();
  rngArray = createUniqueArray();
}

function handleGuessClick() {
  if (document.getElementById("winStr").style.visibility == "visible") {
    document.getElementById("winStr").style.visibility == "hidden";
    clearDynamicSection();
  }
  clearDuplicateError();
  clearRNGDisplay();
  const userGuess = getUserArray();
  if (isUnique(userGuess)) {
    const result = getArraysCalc(userGuess, rngArray);
    printGuessAndResult(result, userGuess);
    if (result.bulls === 4) {
      handleWin();
    }
  } else {
    printDuplicateError();
  }
}

function handleWin() {
  document.getElementById("winStr").style.visibility = "visible";
  historyLastChild = document.getElementById("guessHistory").childNodes;
  historyLastChild = historyLastChild[historyLastChild.length - 1];
  for (let i = 0; i < historyLastChild.childNodes.length; i++) {
    historyLastChild.childNodes[i].style["background-color"] = "#00ff00";
  }
  restartGame();
}
