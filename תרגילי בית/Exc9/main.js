//-----Set_Interval_1-------------------
let intervalID1;
document.querySelector("#startBtn").addEventListener("click", () => {
  let time = 1;
  intervalID1 = setInterval(() => {
    document.querySelector("p").innerText = time++;
  }, 1000);
});
document.querySelector("#stopBtn").addEventListener("click", () => {
  clearInterval(intervalID1);
});

//------Set_Interval_2------------------------

const arr = [4, 8, 92, 52, 6, 13, 84];
document.querySelector("span").innerText = arr;
document.querySelector("#sortBtn").addEventListener("click", () => {
  let isSorted = false;
  const intervalID2 = setInterval(() => {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    document.querySelector("span").innerText = arr;
    if (isSorted) clearInterval(intervalID2);
  }, 1000);
});

//-----------Set_Timeout_1
setTimeout(() => console.log("hello world"), 5000);
