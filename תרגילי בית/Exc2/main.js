//loops_nested_3
function printMultiplyChart() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i * j);
    }
  }
}
function function_2_m(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function function_3_m(num1, num2) {
  return num1 + num2;
}

function function_5_m(numInput) {
  let sum = 0;
  for (let i = 1; i <= numInput; i++) {
    sum += i;
  }
  return sum;
}
let n1 = 1;
let n2 = 2;
function function_6_m() {
  let temp = n1;
  n1 = n2;
  n2 = temp;
}
function_6_m();
// console.log(n1, n2);

function function_7_m(numInput) {
  let myStr = "";
  for (let i = 0; i < numInput; i++) {
    myStr += "*";
    console.log(myStr);
  }
}
// function_7_m(4);

function function_8_b(num) {
  let sum = 0;
  let newNum = num;
  for (let i = 0; i < toString(num).length; i++) {
    const digit = newNum % 10;
    sum += digit;
    newNum = Math.floor(newNum / 10);
  }
  return sum;
}
// console.log(function_8_b(123));

function function_9_b(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  for (let i = 0; i < num; i++) {
    console.log(num2);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
}
// function_9_b(10);

const numArray = [5, 3, 7, 8, 11];
function array_0_5_m(arrayParam) {
  let sum = 0;
  for (let i = 0; i < arrayParam.length; i++) {
    sum += arrayParam[i];
  }
  console.log(`Sum: ${sum} , Avg: ${sum / arrayParam.length}`);
}
// array_0_5_m(numArray);

function array_0_7_m() {
  const namesArray = ["Ramin", "David", "Natan", "Ron", "Dor"];
  for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
  }
}
// array_0_7_m();

function array_1_m() {
  const myArray = [];
  for (let i = 1; i <= 100; i++) {
    myArray.push(i);
  }
  console.log(myArray);
}
// array_1_m();

function array_2_m() {
  const rngArray = [];
  for (let i = 0; i < 5; i++) {
    rngArray.push(Math.floor(Math.random() * 100));
  }
  console.log(rngArray);
  array_0_5_m(rngArray);
}
// array_2_m();

function array_2_5_m(arrayParam, numParam) {
  for (let i = 0; i < arrayParam.length; i++) {
    if (arrayParam[i] == numParam) {
      return true;
    }
  }
  return false;
}
// console.log(array_2_5_m(numArray, 3));

function array_2_7_m(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] == array1[i]) {
        count++;
      }
    }
  }
  return count;
}
const newArray = [11, 2, 3, 8, 5];
// console.log(array_2_7_m(numArray, newArray));

const array_4_array = [1, 2, 3, 4, 5, 5, 4];

function array_4_m(arrayParam) {
  let count = 0;
  for (let i = 0; i < arrayParam.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < arrayParam.length; j++) {
      if (i == j) {
        continue;
      }
      if (arrayParam[i] == arrayParam[j]) {
        isRepeated = true;
      }
    }
    if (!isRepeated) {
      count++;
    }
  }
  return count;
}
// console.log(array_4_m(array_4_array));

function string_1_b(strParam) {
  let output = "";
  for (let i = 0; i < strParam.length; i++) {
    const asciiValue = strParam.charCodeAt(i);
    output += String.fromCharCode(
      asciiValue > 96 && asciiValue < 123 ? asciiValue - 32 : asciiValue
    );
  }

  return output;
}

// console.log(string_1_b("hello"));

function string_2_b(strParam) {
  let firstIndex = 0;
  let secondIndex;
  let item;
  const myArray = [];
  while (secondIndex != -1) {
    secondIndex = strParam.indexOf(",", firstIndex);
    if (secondIndex != -1) {
      item = strParam.substring(firstIndex, secondIndex);
    } else {
      item = strParam.substring(firstIndex);
    }
    myArray.push(+item);
    firstIndex = secondIndex + 1;
  }
  return myArray;
}
// console.log(string_2_b("12,3,455,52"));

function string_3_b(strParam) {
  let longestValue = "";
  let firstIndex;
  let secondIndex = 0;
  let item;
  while (secondIndex != -1) {
    firstIndex = strParam.indexOf(":", secondIndex) + 1;
    secondIndex = strParam.indexOf(",", firstIndex);
    if (secondIndex != -1) {
      item = strParam.substring(firstIndex, secondIndex);
    } else {
      item = strParam.substring(firstIndex);
    }
    if (item.length > longestValue.length) {
      longestValue = item;
    }
  }
  return longestValue;
}
console.log(string_3_b("name:nathan,family:krasney,city:haifa"));
