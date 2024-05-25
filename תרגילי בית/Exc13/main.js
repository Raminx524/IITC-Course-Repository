//* json-server Run cmd: "json-server --watch ../Exc12/data/db.json --port 8001

const displayDataBtn = document.querySelector("#getAllBtn");
const addForm = document.querySelector("#createBookForm");
const delForm = document.querySelector("#deleteBookForm");
const updateForm = document.querySelector("#updateBookForm");
const baseURL = "http://localhost:8001/books";
const nextBtn = document.querySelector("#nextPageBtn");
const prevBtn = document.querySelector("#prevPageBtn");
let pageNum = 1;
displayDataBtn.onclick = async () => {
  try {
    const response = await axios.get(`${baseURL}?_page=${pageNum}`);
    const books = response.data.data;
    const booksElems = books.map(
      (book) =>
        `<tr><td>${book.id}</td><td>${book.name}</td><td>${book.author}</td><td>${book.numPages}</td></tr>`
    );
    const booksTable = document.querySelector("table");
    booksTable.innerHTML = "";
    booksTable.innerHTML += `<thead><th>ID</th><th>Title</th><th>Author</th><th>Pages</th></thead><tbody></tbody>`;
    booksTable.querySelector("tbody").innerHTML = booksElems.join("");
    handleBtns(response.data);
  } catch (err) {
    console.log(err);
  }
};
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#addMsgBox");
  try {
    const newBookData = new FormData(addForm);
    await axios.post(baseURL, newBookData, {
      headers: { "Content-Type": "application/json" },
    });
    msgBox.innerText = "Book Added Successfully!";
  } catch (err) {
    msgBox.innerText = err;
  }
});
delForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#delMsgBox");
  try {
    await axios.delete(`${baseURL}/${delForm.id.value}`);
    msgBox.innerText = "Book Deleted Successfully!";
  } catch (err) {
    msgBox.innerText = `Error: Book not found!`;
  }
});
updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msgBox = document.querySelector("#updateMsgBox");
  const bookNewData = new FormData(updateForm);
  const id = updateForm.id.value;
  try {
    await axios.put(`${baseURL}/${id}`, bookNewData, {
      headers: { "Content-Type": "application/json" },
    });
    msgBox.innerText = "Book Updated Successfully!";
  } catch (err) {
    msgBox.innerText = `Error: Book not found!`;
  }
});
nextBtn.onclick = () => {
  pageNum++;
  displayDataBtn.click();
};
prevBtn.onclick = () => {
  pageNum--;
  displayDataBtn.click();
};

function handleBtns(pagesInfo) {
  const btnContainer = document.querySelector("#paginationBtns");
  if (!btnContainer.style.display) {
    btnContainer.style.display = "flex";
  }
  if (pageNum == pagesInfo.pages) {
    //Reached last page
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if (pageNum == 1) {
    //On first page
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}
