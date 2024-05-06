//---------------Array_Find1---------------------
const numbers = [1, 3, 5, -2, 7];
function searchInArr(arr, val) {
  const ans = arr.find((item) => item === val);
  return ans != undefined;
}
console.log(searchInArr(numbers, 99));

//---------------Array_Find2---------------------
const objArr = [
  { name: "Moshe Kupernikos", age: 33 },
  { name: "Shimon", age: 21 },
  { name: "Joe", age: 34 },
];
function searchAgeInObjArr(arr, age) {
  const ans = arr.find((item) => item["age"] == age);
  if (!ans) console.log("no");
  else console.log(ans);
}

searchAgeInObjArr(objArr, 21);

//---------------Array_splice1---------------------

numbers.splice(2, 1);
console.log(numbers);

//---------------Array_splice2---------------------

// objArr.splice(0, 1);
console.log(objArr);

//---------------Array_filter1---------------------
function createEvenArr(arr) {
  return arr.filter((item) => item % 2 != 0);
}
console.log(createEvenArr([1, 4, 3, 5, -2, 7]));

//---------------Array_filter2---------------------
function filterYoungerThan34(arr) {
  return arr.filter((person) => person.age >= 34);
}
console.log(filterYoungerThan34(objArr));

//---------------Array_reduce1---------------------
function calcArrSum(arr) {
  return arr.reduce((num1, num2) => num1 + num2);
}
console.log(calcArrSum([1, 2, 3, 4, 5]));

//---------------Array_map1---------------------
function map1(namesArr) {
  const divContainer = document.createElement("ol");
  document.body.insertAdjacentElement("afterbegin", divContainer);
  const namesElems = namesArr.map((name) => {
    const pElem = document.createElement("li");
    const nameNode = document.createTextNode(name);
    pElem.appendChild(nameNode);
    return pElem;
  });
  divContainer.append(...namesElems);
}
map1(["ramin", "david", "nevo"]);
