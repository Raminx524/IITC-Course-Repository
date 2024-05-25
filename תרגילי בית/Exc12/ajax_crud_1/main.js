const baseURL = "http://localhost:8001/users";
const displayUsersBtn = document.querySelector("#getAllBtn");
displayUsersBtn.onclick = async () => {
  try {
    const response = await axios.get(baseURL);
    const users = response.data;
    const usersElems = users.map(
      (user) =>
        `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td></tr>`
    );
    const usersTable = document.querySelector("table");
    usersTable.innerHTML += `<thead><th>ID</th><th>First Name</th><th>Last Name</th></thead><tbody></tbody>`;
    usersTable.querySelector("tbody").innerHTML = usersElems.join("");
  } catch (err) {
    console.log(err);
  }
};
const addForm = document.querySelector("#createUserForm");
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#addMsgBox");
  try {
    const newUserData = new FormData(addForm);
    await axios.post(baseURL, newUserData, {
      headers: { "Content-Type": "application/json" },
    });
    msgBox.innerText = "User Added Successfully!";
  } catch (err) {
    msgBox.innerText = err;
  }
});

const delForm = document.querySelector("#deleteUserForm");
delForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#delMsgBox");
  try {
    await axios.delete(`${baseURL}/${delForm.id.value}`);
    msgBox.innerText = "User Deleted Successfully!";
  } catch (err) {
    msgBox.innerText = `Error: User not found!`;
  }
});

const updateForm = document.querySelector("#updateUserForm");
updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#updateMsgBox");
  const userNewData = new FormData(updateForm);
  const id = updateForm.id.value;
  try {
    await axios.put(`${baseURL}/${id}`, userNewData, {
      headers: { "Content-Type": "application/json" },
    });
    msgBox.innerText = "User Updated Successfully!";
  } catch (err) {
    msgBox.innerText = `Error: User not found!`;
  }
});
