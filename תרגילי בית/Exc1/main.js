function ex1() {
  let counter = 1;
  while (counter <= 100) {
    console.log(counter++);
  }
}

function ex2() {
  let counter = 1;
  let sum = 0;

  while (counter <= 5) {
    userNum = +prompt(`Enter number ${counter}`);
    sum += userNum;
    counter++;
  }
  console.log(`Sum: ${sum} , Avg: ${sum / counter}`);
}

function ex3() {
  let counter = 0;
  while (counter <= 50) {
    if (counter % 2 == 0) {
      console.log(counter);
    }
  }
  counter++;
}

function ex4() {
  let counter = 1;
  while (counter <= 50) {
    console.log(counter);
    counter += 3;
  }
}

function ex5() {
  const userNum = +prompt("Enter a number");
  let counter = 1;
  let factorAns = 1;
  while (counter <= userNum) {
    factorAns *= counter;
    counter++;
  }
  console.log(factorAns);
}

function ex6() {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let counter = 0;
  while (counter < 5) {
    const userNum = +prompt(`Enter number ${++counter}`);
    if (userNum > max) {
      max = userNum;
    } else if (userNum < min) {
      min = userNum;
    }
  }
  console.log(`Max: ${max}, Min: ${min}`);
}

function ex7() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  let sum = 0;
  for (let j = 1; j <= 5; j++) {
    userNum = +prompt(`Enter number ${j}`);
    sum += userNum;
  }
  console.log(`Sum: ${sum} , Avg: ${sum / 5}`);
}

function ex7_5() {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  for (let j = 1; j <= 50; j += 3) {
    console.log(j);
  }
}

function ex8() {
  const userNum = +prompt("Enter a number");
  let counter = 1;
  let factorAns = 1;
  do {
    factorAns *= counter;
    counter++;
  } while (counter <= userNum);

  console.log(factorAns);

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let counter1 = 0;
  do {
    const userInput = +prompt(`Enter number ${++counter1}`);
    if (userInput > max) {
      max = userInput;
    } else if (userInput < min) {
      min = userInput;
    }
  } while (counter1 < 5);
  console.log(`Max: ${max}, Min: ${min}`);
}

function ex8_do_while() {
  //ex1
  let counter = 1;
  let sum = 0;
  do {
    console.log(counter++);
  } while (counter <= 100);
  //Ex2
  let counter2 = 1;
  do {
    userNum = +prompt(`Enter number ${counter2}`);
    sum += userNum;
    counter2++;
  } while (counter2 <= 5);
  console.log(`Sum: ${sum} , Avg: ${sum / 5}`);
  //Ex3
  let counter3 = 0;
  while (counter3 <= 50) {
    if (counter3 % 2 == 0) {
      console.log(counter3);
    }
    counter3++;
  }
  //Ex4
  let counter4 = 1;
  do {
    console.log(counter4);
    counter4 += 3;
  } while (counter4 <= 50);
}

function ex9() {
  let userNum = +prompt("Enter a number");
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  while (userNum > 0) {
    if (userNum < min) {
      min = userNum;
    }
    if (userNum > max) {
      max = userNum;
    }
    userNum = +prompt("Enter another number");
  }
  console.log("Max number: " + max);
  console.log("min number: " + min);
}

function ex10() {
  const userInput = prompt("Enter a number");
  let newNum = +userInput;
  let digit;
  for (let i = 0; i < userInput.length; i++) {
    digit = newNum % 10;
    newNum = Math.floor(newNum / 10);
    console.log(digit);
  }
}

function ex11() {
  let ans = Math.floor(Math.random() * 100);
  let counter = 0;
  const startTime = new Date();
  let guess = +prompt("Guess the number");
  while (guess != ans) {
    counter++;
    if (guess < ans) {
      guess = +prompt("Higher, try again");
    }
    if (guess > ans) {
      guess = +prompt("Lower, try again");
    }
  }
  alert("Well done!");
  const endTime = new Date();
  const timeElapsed = endTime - startTime;
  console.log(`Time: ${timeElapsed / 1000} seconds`);
  console.log("Number of tries: " + counter);
}

function ex12() {
  const height = +prompt("Enter height");
  const len = +prompt("Enter length");
  let myStr = "";
  for (let i = 0; i < len; i++) {
    myStr += "*";
  }
  for (let j = 0; j < height; j++) {
    console.log(myStr);
  }
}

function classEx() {
  let height = +prompt("Enter height");
  let len = +prompt("Enter length");
  while (isNaN(height) || isNaN(len)) {
    if (isNaN(height)) {
      height = +prompt("Height invalid, must be a number!");
    }
    if (isNaN(len)) {
      len = +prompt("Length invalid, must be a number!");
    }
  }
  console.log(`Shetah: ${height * len}`);
  console.log(`Heikef: ${(height + len) * 2}`);
}