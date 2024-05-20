//------Promise 1-------------
function someFunc(id) {
  const p = new Promise((resolve, reject) => {
    if (id === 0) {
      setTimeout(() => resolve("Success"), 2000);
    } else {
      setTimeout(() => reject("Failure"), 3000);
    }
  });
  p.then(printResult).catch(printResult);
}
function printResult(val) {
  document.querySelector("p").innerText = val;
}
//------Promise 1.5-------------
function handleSpinner() {
  const p = new Promise((resolve, reject) => {
    document.querySelector(".loader").style.display = "block";
    setTimeout(() => resolve("Spin completed"), 2000);
    setTimeout(() => reject("Spin failed"), 2000);
  });
  p.then(hideLoader);
  p.catch(printResult);
}
function hideLoader() {
  document.querySelector(".loader").style.display = "none";
}

//-----------Promise 2-------------
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
}
fetchData().then((message) => console.log(message));

//--------Promise 2.5-------------
const isEvenAsync = (num) => {
  return new Promise((resolve, reject) => {
    if (!isNaN(num)) {
      resolve(num % 2 === 0);
    } else {
      reject("validation error");
    }
  });
};
function resolveHandlerFunction(message) {
  console.log(message);
}
isEvenAsync(2).then(resolveHandlerFunction).catch(resolveHandlerFunction);

//---------Axios 0 && 0.5---------------
const tableElem = document.querySelector("#tblElem");
function getTableData() {
  const startTime = new Date().getTime();
  tableElem.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      document.querySelector(".loader").style.display = "block";
      if (new Date().getTime() - startTime < 2000) {
        setTimeout(() => printTableData(data), 2000);
      } else {
        printTableData(data);
      }
    });
}
function printTableData(dataParam) {
  const tableDataElems = dataParam.map(
    (obj, i) =>
      `<tr>
    <td>${i}</td><td>${obj.name}</td><td>${obj.email}</td><td>${obj.body}</td>
    </tr>`
  );
  document.querySelector(
    "h1"
  ).innerText = `JSON Placeholder(${dataParam.length})`;
  tableElem.innerHTML += `<thead><th>Index</th><th>User Name</th><th>Email</th><th>Comment</th></thead><tbody></tbody>`;
  document.querySelector("tbody").innerHTML = tableDataElems.join("");
  hideLoader();
}
