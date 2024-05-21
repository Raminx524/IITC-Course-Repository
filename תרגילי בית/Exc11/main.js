//TODO------------------------------Promise 3------------------------------
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "John Doe" });
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
    return new Promise((resolve) => resolve(user.name));
  })
  .then((userName) => {
    setTimeout(() => {
      console.log(userName);
    }, 1000);
  });

//TODO------------------------------Promise 3.5------------------------------
const driveToGasStation = new Promise((resolve, reject) => {
  resolve("Drive to gas station");
});
const fillTheCar = new Promise((resolve, reject) => {
  resolve("Fill the car");
});
const driveToResturant = new Promise((resolve, reject) => {
  resolve("drive to restaurant");
});
driveToGasStation
  .then((msg) => {
    console.log(msg);
    return fillTheCar;
  })
  .then((msg) => {
    console.log(msg);
    return driveToResturant;
  })
  .then((msg) => console.log(msg));

//TODO------------------------------Promise 5------------------------------
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "John Doe" });
  }, 1000);
});
const fetchPosts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Post1", "Post2"]);
  }, 2000);
});
Promise.all([fetchUser, fetchPosts]).then((messages) => {
  messages.forEach((msg) => console.log(msg));
});

//TODO------------------------------Promise 7 & 8------------------------------
const BASE_URL = "https://jsonplaceholder.typicode.com";
const getPosts = new Promise((resolve, reject) => {
  axios.get(`${BASE_URL}/posts`).then((res) => resolve(res.data));
});
const getUsers = new Promise((resolve, reject) => {
  axios.get(`${BASE_URL}/users`).then((res) => resolve(res.data));
});
const getComments = new Promise((resolve, reject) => {
  axios.get(`${BASE_URL}/comments`).then((res) => resolve(res.data));
});

//* Promise Chaining (Promise7)

//* getPosts
//*   .then((posts) => {
//*     console.log(posts.length);
//*     return getUsers;
//*   })
//*   .then((users) => {
//*     console.log(users.length);
//*     return getComments;
//*   })
//*   .then((comments) => {
//*     console.log(comments.length);
//*   });

//! Promise.all() (Promise 8)

//! const getJSONplaceholderData = [getPosts, getUsers, getComments];
//! Promise.all(getJSONplaceholderData).then((jsonPlaceholderData) => {
//!   const totalDataItems = jsonPlaceholderData.reduce(
//!     (sum, dataItem) => (sum += dataItem.length),
//!     0
//!   );
//!   console.log(totalDataItems);
//! });

//TODO------------------------------Promise 6------------------------------
async function promiseAll(promises) {
  const promisesResults = [];
  promises.forEach((promiseVar) => {
    promiseVar.then((result) => promisesResults.push(result));
  });
  return promisesResults;
}
console.log(promiseAll([fetchUser, fetchPosts]));

// console.log(Promise.all([fetchUser, fetchPosts]));
