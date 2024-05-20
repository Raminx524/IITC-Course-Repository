const BASE_URL = "https://jsonplaceholder.typicode.com/";
const POSTS_URL = `${BASE_URL}/posts`;
const USERS_URL = `${BASE_URL}/users`;
const TABLE_ELEMENT = document.querySelector("#tblElem");

function init() {
  TABLE_ELEMENT.innerHTML = "";
  axios.get(POSTS_URL).then((postRes) => {
    axios.get(USERS_URL).then((userRes) => {
      const joinedTable = addUserNameToPosts(postRes.data, userRes.data);
      setTimeout(() => {
        printTableData(joinedTable);
      }, 1500);
    });
  });
}

function addUserNameToPosts(posts, users) {
  return posts.map((post) => {
    const userData = users.find((user) => user.id === post.userId);
    const newPost = {
      ...post,
      userName: userData.username,
    };
    return newPost;
  });
}

function printTableData(table) {
  const tableDataElems = table.map(
    (row) =>
      `<tr>
    <td>${row.id}</td><td class="userNames">${row.userName}</td><td>${row.title}</td><td>${row.body}</td>
    </tr>`
  );
  TABLE_ELEMENT.innerHTML += `<thead><th>ID</th><th>User Name</th><th>Title</th><th>Body</th></thead><tbody></tbody>`;
  document.querySelector("tbody").innerHTML = tableDataElems.join("");
  document.querySelector(".loader").style.display = "none";
}

init();
