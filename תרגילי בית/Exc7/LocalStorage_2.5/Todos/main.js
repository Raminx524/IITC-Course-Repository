const TODO_KEY = "todoList";
let todosArray = initializeTodoList();

document.getElementById("addTodoBtn").addEventListener("click", () => {
  const itemName = document.getElementById("todoInput").value;
  const isFound = todosArray.some((el) => el.todoName === itemName);
  if (!isFound) {
    todosArray.push({ todoName: itemName, isCompleted: false });
    updateLocalStorage();
  }
  updateListElem(todosArray);
});

//--------Click To Complete Todo Handler

function toggleTodoStatus(item) {
  for (let i = 0; i < todosArray.length; i++) {
    if (todosArray[i].todoName === item.innerText) {
      if (todosArray[i].isCompleted) {
        todosArray[i].isCompleted = false;
      } else {
        todosArray[i].isCompleted = true;
      }
    }
  }
  updateLocalStorage();
  updateListElem(todosArray);
}

function updateListElem(listArr) {
  const listElem = document.getElementById("todoList");
  listElem.innerHTML = null;
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].isCompleted) {
      listElem.innerHTML += `<li class="completed" onclick="toggleTodoStatus(this)">${listArr[i]["todoName"]}</li>`;
    } else {
      listElem.innerHTML += `<li onclick="toggleTodoStatus(this)">${listArr[i]["todoName"]}</li>`;
    }
  }
}

function initializeTodoList() {
  if (localStorage.getItem(TODO_KEY) == null) {
    return [];
  }
  return JSON.parse(localStorage.getItem(TODO_KEY));
}
//-------Click To Remove Handler (Uncalled)
function delItemFromList(item) {
  const itemName = item.innerText;
  itemIndex = todosArray.indexOf(itemName);
  todosArray.splice(itemIndex, 1);
  updateLocalStorage();
  updateListElem(todosArray);
}

function sortList() {
  const sortedList = todosArray.sort();
  updateListElem(sortedList);
}

function clearList() {
  localStorage.removeItem(TODO_KEY);
  todosArray = [];
  updateListElem(todosArray);
}

function updateLocalStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todosArray));
}
