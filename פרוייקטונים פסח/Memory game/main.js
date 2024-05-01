let activeCard = null;
let pairsFound = 0;
let movesCounter = 0;
let clockID;
let col = 5;
let row = 4;
startGame(col, row);

function printBoard(columns, rows) {
  const width = Math.floor(100 / columns);
  const containerElem = document.getElementById("cardsContainer");
  containerElem.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    containerElem.innerHTML += `<div class="cardsRow"></div>`;
    const currentRow = document.getElementsByClassName("cardsRow")[i];
    for (let j = 0; j < columns; j++) {
      currentRow.innerHTML += `<div class="singleCard" width="${width}%">
    <img class="cardPic">
  </div>`;
    }
  }
}

function generatePairs(size) {
  const usedNumArr = [];
  const pairsArr = [];
  for (let i = 0; i < size; i++) {
    const rng = Math.floor((Math.random() * size) / 2);
    if (pairsArr.indexOf(rng) != -1) {
      if (usedNumArr.indexOf(rng) == -1) {
        pairsArr.push(rng);
        usedNumArr.push(rng);
      } else i--;
    } else pairsArr.push(rng);
  }
  return pairsArr;
}

function handleTimer() {
  const stringElem = document.getElementById("timeSpan");
  let [minutesStr, secondsStr] = stringElem.innerText.split(":");
  let seconds = +secondsStr;
  let minutes = +minutesStr;
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes < 10) {
    minutesStr = `0${minutes}`;
  } else minutesStr = minutes;
  if (seconds < 10) {
    secondsStr = `0${seconds}`;
  } else secondsStr = seconds;
  stringElem.innerText = `${minutesStr}:${secondsStr}`;
}

function assignImages(rngArr) {
  const cards = Array.from(document.getElementsByClassName("cardPic"));
  rngArr.forEach((value, i) => {
    cards[i]["src"] = `./assets/image${value}.jpg`;
  });
}

function updateGameInfo() {
  document.getElementById("moveSpan").innerText = movesCounter;
}

function startGame(columns, rows) {
  document.getElementById("winMsgContainer").style.visibility = "hidden";
  col = columns;
  row = rows;
  clearInterval(clockID);
  movesCounter = 0;
  document.getElementById("timeSpan").innerText = "00:00";
  pairsFound = 0;
  printBoard(columns, rows);
  const boardPatternArr = generatePairs(columns * rows);
  assignImages(boardPatternArr);
  updateGameInfo();
  addEventFunctionality();
  clockID = setInterval(handleTimer, 1000);
}

function addEventFunctionality() {
  const cards = document.getElementsByClassName("singleCard");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", handleClick);
  }
}

function removeEvents() {
  const cards = document.getElementsByClassName("singleCard");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style["pointer-events"] = "none";
  }
}

function addEvents() {
  const cards = document.getElementsByClassName("singleCard");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style["pointer-events"] = "auto";
  }
}

function handleClick(event) {
  const currentCard = event.target.children[0];
  currentCard.style.visibility = "visible";
  if (activeCard === null) {
    activeCard = currentCard;
  } else {
    removeEvents();
    if (activeCard["src"] === currentCard["src"]) {
      currentCard.style.filter = "sepia(60%)";
      activeCard.style.filter = "sepia(60%)";
      pairsFound++;
      activeCard = null;
      movesCounter++;
      updateGameInfo();
      addEvents();
    } else {
      setTimeout(() => {
        currentCard.style.visibility = "hidden";
        activeCard.style.visibility = "hidden";
        activeCard = null;
        movesCounter++;
        updateGameInfo();
        addEvents();
      }, 1500);
    }
  }
  if (pairsFound == document.getElementsByClassName("singleCard").length / 2) {
    clearInterval(clockID);
    document.getElementById("winMsgContainer").style.visibility = "visible";
    document.getElementById("rematchBtn").addEventListener("click", () => {
      startGame(col, row);
    });
  }
}
