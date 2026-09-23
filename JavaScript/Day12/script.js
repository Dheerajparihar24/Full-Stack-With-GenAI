const clickMeBtn = document.querySelector("#clickBtn");
const clickCount = document.querySelector("#clickCount");

const testForm = document.querySelector("#testForm");
const testInput = document.querySelector("#testInput");
const output = document.querySelector("#output");

const liveInput = document.querySelector("#liveInput");
const livePreview = document.querySelector("#livePreview");

let count = 0;

clickMeBtn.addEventListener("click", (e) => {
  count = count + 1;
  clickCount.textContent = `Clicks: ${count}`; //1st
  console.log(e.target); //5
  console.log(e.target.value); //6
});

testForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(testInput.value); // 2nd
  output.textContent = `You submitted: ${testInput.value}`; //3rd
  testInput.value = "";
});

liveInput.addEventListener("input", () => {
  livePreview.textContent = liveInput.value; //4
});
