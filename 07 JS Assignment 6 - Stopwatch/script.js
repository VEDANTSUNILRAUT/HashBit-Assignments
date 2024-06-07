let timer;
let startTime;
let elapsedTime = 0;
let isPaused = false;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

function updateTime() {
  const now = Date.now();
  const difference = now - startTime + elapsedTime;
  document.getElementById("time").textContent = formatTime(difference);
}

function start() {
  startTime = Date.now();
  timer = setInterval(updateTime, 1000);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;
  if (isPaused) {
    document.getElementById("pause").textContent = "Pause";
    isPaused = false;
  }
}

function pause() {
  if (isPaused) {
    start();
  } else {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    document.getElementById("pause").textContent = "Continue";
    isPaused = true;
  }
}

function stop() {
  clearInterval(timer);
  elapsedTime = 0;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
  document.getElementById("pause").textContent = "Pause";
}
