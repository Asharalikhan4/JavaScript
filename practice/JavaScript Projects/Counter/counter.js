const counterEl = document.getElementById("counterValue");
let counterValue = Number(counterEl.innerText);
let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");

incrementButton.addEventListener("click", () => {
  counterValue++;
  counterEl.innerText = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  counterEl.innerText = counterValue;
});