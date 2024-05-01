let turnCount, currentPlayer, isWinner;
let player1 = { name: "", symbol: "" };
let player2 = { name: "", symbol: "" };
let gridSize, startTime, gameTime;
const gamesArchive = [];

function drawGrid(sizeParam) {
  pageContainer.innerHTML = `<div id="gameUIContainer">
  <div id="dynamicContainer">
  <div id="msgBox"></div>
  <div id="btnContainer"></div>
  </div>
  <div id="grid_board"></div>
  </div>
  <div id="archiveContainer"></div>`;
  gridElem = document.getElementById("grid_board");
  for (let i = 0; i < sizeParam; i++) {
    gridElem.innerHTML += `<div class="row"></div>`;
    for (let j = 0; j < sizeParam; j++) {
      document.getElementsByClassName("row")[
        i
      ].innerHTML += `<div class="cell"></div>`;
    }
  }
}

function handleArchive() {
  const container = document.getElementById("archiveContainer");
  if (container.style.visibility == "visible") {
    container.style.visibility = "hidden";
    pageContainer.style["overflow-y"] = "hidden";
  } else {
    container.style.visibility = "visible";
    pageContainer.style["overflow-y"] = "scroll";
  }
}

function addBtnEvents() {
  document.getElementById("rematchBtn").addEventListener("click", startGame);
  document
    .getElementById("archiveBtn")
    .addEventListener("click", handleArchive);
}

function updateArchive() {
  document.getElementById("archiveContainer").innerHTML = "";
  gamesArchive.forEach((matchInfoObj, i) => {
    document.getElementById(
      "archiveContainer"
    ).innerHTML += `<div class="matchInfoContainer"></div>`;
    const matchContainer =
      document.getElementsByClassName("matchInfoContainer")[i];
    switch (matchInfoObj.result) {
      case "Draw":
        matchContainer.innerHTML = `<p class="playerName">${matchInfoObj.player1}</p> <p class="drawElem">Draw</p> <p class="playerName">${matchInfoObj.player2}</p> <p>${matchInfoObj.time}</p>`;
        break;
      case matchInfoObj.player1:
        matchContainer.innerHTML = `<p class="playerName">${matchInfoObj.player1}(Winner)</p> <p class="playerName">${matchInfoObj.player2}</p> <p>${matchInfoObj.time}</p>`;
        break;
      case matchInfoObj.player2:
        matchContainer.innerHTML = `<p class="playerName">${matchInfoObj.player1}</p> <p class="playerName">${matchInfoObj.player2}(Winner)</p> <p>${matchInfoObj.time}</p>`;
        break;
      default:
        break;
    }
  });
}

function handleTurns(currentPlayer, p1, p2) {
  if (currentPlayer.symbol === p1.symbol) {
    return p2;
  }
  return p1;
}

function checkForWinner(symbol) {
  const board = document.getElementsByClassName("row");
  const boardArray = Array.from(board);
  const completeBoard = boardArray.map((row) => Array.from(row.children));
  //Check rows
  for (let i = 0; i < gridSize; i++) {
    const row = completeBoard[i];
    let winnerFound = row.every((cell) => {
      return cell.innerText === symbol;
    });
    if (winnerFound) return true;
  }
  //Check columns
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (completeBoard[j][i].innerText != symbol) {
        break;
      }
      if (j === gridSize - 1) {
        return true;
      }
    }
  } //Check Diagonal 1
  for (let i = 0; i < gridSize; i++) {
    if (completeBoard[i][i].innerText != symbol) {
      break;
    }
    if (i === gridSize - 1) {
      return true;
    }
  }
  //Check Diagonal 2
  for (let i = 0; i < gridSize; i++) {
    if (completeBoard[i][gridSize - i - 1].innerText != symbol) {
      break;
    }
    if (i === gridSize - 1) {
      return true;
    }
  }
  return false;
}

function checkMove(cell, currentPlayer) {
  if (cell.innerText == "") {
    cell.innerText = currentPlayer.symbol;
    return true;
  } else {
    document.getElementById("msgBox").innerText =
      "Slot already taken, Try again!";
    return false;
  }
}

function calcTime(startTimeParam) {
  const endTime = new Date();
  const totalTime = Math.round(((endTime - startTimeParam) / 1000) * 10) / 10;
  return `${totalTime} seconds`;
}

function prettyResult(resultParam, p1, p2, timeParam) {
  if (resultParam === "Draw") {
    return {
      result: "Draw",
      player1: p1.name,
      player2: p2.name,
      time: timeParam,
    };
  } else {
    return {
      result: resultParam.name,
      player1: p1.name,
      player2: p2.name,
      time: timeParam,
    };
  }
}

function endGame(result) {
  const timeStr = calcTime(startTime);
  document
    .getElementById("grid_board")
    .removeEventListener("click", handleClick);
  gamesArchive.push(prettyResult(result, player1, player2, timeStr));
  updateArchive();
  document.getElementById(
    "btnContainer"
  ).innerHTML = `<button id="rematchBtn" class="dynamicBtn">Rematch</button> <button id="archiveBtn" class="dynamicBtn">Game history</button>`;
  addBtnEvents();
  return timeStr;
}

function handleClick(event) {
  event.stopPropagation();
  const validMove = checkMove(event.target, currentPlayer);
  isWinner = checkForWinner(currentPlayer.symbol);
  if (isWinner) {
    const timeString = endGame(currentPlayer);
    document.getElementById("msgBox").innerText = `${currentPlayer.name} wins!
    Time: ${timeString}`;
  } else if (validMove) {
    currentPlayer = handleTurns(currentPlayer, player1, player2);
    turnCount++;
    document.getElementById(
      "msgBox"
    ).innerText = `${currentPlayer.name}'s turn`;
  }
  if (turnCount >= gridSize * gridSize) {
    const timeString = endGame("Draw");
    document.getElementById("msgBox").innerText = `Draw!
    Time: ${timeString}`;
  }
}

function startGame() {
  drawGrid(gridSize);
  startTime = new Date();
  turnCount = 0;
  currentPlayer = player1;
  const board = document.getElementById("grid_board");
  document.getElementById("msgBox").innerText = `${currentPlayer.name}'s turn`;
  gameStats = board.addEventListener("click", handleClick);
}

gameInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const symInputs = document.getElementsByName("startSym");
  player1.name = p1_input.value;
  player2.name = p2_input.value;
  for (let i = 0; i < symInputs.length; i++) {
    if (symInputs[i].checked) {
      player1.symbol = symInputs[i].value;
    } else {
      player2.symbol = symInputs[i].value;
    }
  }
  gridSize = grid_input.value;
  startGame();
});
