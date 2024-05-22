//* JSON-SERVER RUN CMD (from Exc12 DIR): "json-server --watch ./data/db.json --port 8001"

const baseURL = "http://localhost:8001";
async function createUsers() {
  try {
    for (let i = 1; i <= 500; i++) {
      const res = await axios.post(`${baseURL}/users`, {
        id: i,
        firstName: `fName${i}`,
        lastName: `lName${i}`,
      });
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
}

// createUsers(); //! USE WITH CAUTION

async function createBooks() {
  try {
    for (let i = 1; i <= 500; i++) {
      const res = await axios.post(`${baseURL}/books`, {
        id: i,
        name: `Book Name ${i}`,
        author: `Author Name ${i}`,
        numPages: Math.floor(Math.random() * 1000) + 500,
      });
      console.log(res);
    }
  } catch (err) {
    console.log(err);
  }
}
// createBooks(); //! USE WITH CAUTION

//? json_server_2 -- Yes, json-server recognizes the ID property and assigns it a unique value (If unassigned)
