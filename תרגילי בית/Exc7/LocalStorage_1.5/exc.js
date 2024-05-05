let counter0 = initializeCounter(0);
let counter1 = initializeCounter(1);
const counters = [counter0, counter1];
function incrementVal(targetID) {
  document.getElementById(
    `counterP${targetID}`
  ).innerText = `Counter: ${counters[targetID]}`;
  counters[targetID]++;
  localStorage.setItem(`counter${targetID}`, counters[targetID]);
}

function initializeCounter(keyID) {
  const KEY = `counter${keyID}`;
  if (localStorage.getItem(KEY) === null) {
    return 0;
  }
  return +localStorage.getItem(KEY);
}
