let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let laps = document.getElementById('laps');

let hours = 0, minutes = 0, seconds = 0;
let interval = null;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  timer.innerText = `${h}:${m}:${s}`;
}

startBtn.onclick = () => {
  if (interval === null) {
    interval = setInterval(updateTimer, 1000);
  }
};

pauseBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  hours = minutes = seconds = 0;
  timer.innerText = '00:00:00';
  laps.innerHTML = '';
};

lapBtn.onclick = () => {
  let li = document.createElement('li');
  li.innerText = timer.innerText;
  laps.appendChild(li);
};
