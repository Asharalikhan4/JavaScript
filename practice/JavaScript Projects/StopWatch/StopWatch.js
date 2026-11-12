const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = null;
let elapsedTime = 0;
let timerId = null;

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(milliseconds).padStart(3, "0")
  );
}

function render() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime;
  display.innerText = formatTime(diff);
}

startBtn.addEventListener("click", () => {
  startTime = Date.now();
  timerId = setInterval(render, 10);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);
  elapsedTime += Date.now() - startTime;

  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startTime = null;
  elapsedTime = 0;
  display.innerText = "00:00.000";

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
});
