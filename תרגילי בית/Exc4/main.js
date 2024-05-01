const booksArray = [
  { name: "Harry Potter", pages: 500 },
  { name: "Lion king", pages: 502 },
  { name: "Dragon ball", pages: 503 },
  { name: "Rich dad poor dad", pages: 563 },
  { name: "Hercules", pages: 403 },
];
// for (let i = 0; i < booksArray.length; i++) {
//   console.log(
//     `Book name: ${booksArray[i]["name"]}, Pages: ${booksArray[i]["pages"]}`
//   );
// }

function addBook(arr, bookName, bookPages) {
  arr.push({ name: bookName, pages: bookPages });
}
// addBook(booksArray, "David", 502);
// console.log(booksArray);

function getBook(arr, bookName) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["name"] == bookName) {
      return arr[i];
    }
  }
  return null;
}
// console.log(getBook(booksArray, "Lion king"));

function updateBookPages(arr, bookName, bookPages) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["name"] == bookName) {
      arr[i]["pages"] = bookPages;
      return arr[i];
    }
  }
  return null;
}
// console.log(updateBookPages(booksArray, "Hercules", 5000));

function deleteBook(arr, bookName) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]["name"] == bookName) {
      arr.splice(i, 1);
      return true;
    }
  }
  return false;
}
// console.log(deleteBook(booksArray, "Lion king"));

const numberArray = [9, 1, 8, 4, 1];
function array_operation_5(arr, num) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      arr[i] += 1;
      isFound = true;
    }
  }
  if (isFound) {
    console.log(arr);
  } else {
    console.log("Number not found");
  }
}
array_operation_5(numberArray, 1);
