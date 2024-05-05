const numArray = [5, 3, 34, 68, 89, 9, 0];

//-------Sort_1---------
function calcMin(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function createAscendingArr(arrParam) {
  const sortedArr = [];
  const trackArr = arrParam.slice();
  for (let i = 0; i < arrParam.length; i++) {
    const currentNum = calcMin(trackArr);
    sortedArr.push(currentNum);
    trackArr.splice(trackArr.indexOf(currentNum), 1);
  }
  return sortedArr;
}

const sortedNumbers = createAscendingArr(numArray);
console.log(sortedNumbers);
console.log(numArray);

//----------Sort_2-------------
function sort_numArray_Ascending() {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < numArray.length - 1; i++) {
      if (numArray[i] > numArray[i + 1]) {
        isSorted = false;
        const temp = numArray[i];
        numArray[i] = numArray[i + 1];
        numArray[i + 1] = temp;
      }
    }
  }
}
sort_numArray_Ascending();
console.log(numArray);
