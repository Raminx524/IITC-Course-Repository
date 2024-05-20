const POSTS = "https://jsonplaceholder.typicode.com/posts";
const USERS = "https://jsonplaceholder.typicode.com/users";
const tableElem = document.querySelector("#tblElem");
getTableData();
function getTableData() {
  tableElem.innerHTML = "";
  axios.get(POSTS).then((postRes) => {
    axios.get(USERS).then((userRes) => {
      setTimeout(() => {
        printTableData(postRes.data, userRes.data);
      }, 1500);
    });
  });
}
function printTableData(dataParam, users) {
  const tableDataElems = dataParam.map(
    (obj) =>
      `<tr>
    <td>${obj.id}</td><td class="userNames">${getUserName(
        obj.userId,
        users
      )}</td><td>${obj.title}</td><td>${obj.body}</td>
    </tr>`
  );
  tableElem.innerHTML += `<thead><th>ID</th><th>User Name</th><th>Title</th><th>Body</th></thead><tbody></tbody>`;
  document.querySelector("tbody").innerHTML = tableDataElems.join("");
  document.querySelector(".loader").style.display = "none";
}
function getUserName(index, userNames) {
  return userNames[index - 1].username;
}
