//TODO---------------------async_await 1----------------------------
function pause(sleepMs) {
  return new Promise((resolve, reject) => {
    if (!isNaN(sleepMs)) {
      setTimeout(() => {
        resolve("Pause Complete!");
      }, sleepMs);
    } else {
      reject("PAUSE ERROR: Argument must be a number");
    }
  });
}

async function checkPause() {
  try {
    console.log(new Date());
    const response = await pause(4000);
    console.log(response);
    console.log(new Date());
  } catch (error) {
    console.log(error);
  }
}
// checkPause();

//TODO---------------------async_await 2----------------------------
const f1 = () => console.log("f1 called");
const f2 = () => console.log("f2 called");
const f3 = () => console.log("f3 called");

async function execute_f_functions() {
  try {
    await pause(3000);
    f1();
    await pause("b");
    f2();
    await pause(7000);
    f3();
  } catch (err) {
    console.log(err);
  }
}
// execute_f_functions();

//TODO---------------------async_await 2----------------------------
const BASE_URL = "https://jsonplaceholder.typicode.com";
const getPosts = axios.get(`${BASE_URL}/posts`).then((res) => res.data);
const getUsers = axios.get(`${BASE_URL}/users`).then((res) => res.data);
const getComments = axios.get(`${BASE_URL}/comments`).then((res) => res.data);

async function promise7() {
  try {
    const posts = await getPosts;
    console.log(posts);
    const users = await getUsers;
    console.log(users.length);
    const comments = await getComments;
    console.log(comments.length);
  } catch (err) {
    console.log(err);
  }
}
// promise7();

async function promise8() {
  try {
    const response = await Promise.all([getPosts, getUsers, getComments]);
    const totalResources = response.reduce(
      (sum, dataArr) => (sum += dataArr.length),
      0
    );
    console.log(totalResources);
  } catch (err) {
    console.log(err);
  }
}
// promise8();
