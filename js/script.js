let sec = 0;
let min = 0;
let hour = 0;
let alertFuncTemplate;
let time = document.querySelector(".time");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let on = false;

function myFunction() {
  alertFuncTemplate = setInterval(alertFunc, 1000);
}

function alertFunc() {
  sec++;
  if (sec === 59) {
    min++;
    sec = 0;
  }
  if (min === 59) {
    hour++;
    min = 0;
  }
  //Check Sec
  if (sec < 10 && min < 10 && hour < 10) {
    time.textContent = "0" + hour + ":0" + min + ":0" + sec;
  }
  if (sec >= 10 && min < 10 && hour < 10) {
    time.textContent = "0" + hour + ":0" + min + ":" + sec;
  }
  if (sec >= 10 && min >= 10 && hour < 10) {
    time.textContent = "0" + hour + ":" + min + ":" + sec;
  }
  if (sec >= 10 && min >= 10 && hour >= 10) {
    time.textContent = "" + hour + ":" + min + ":" + sec;
  }
  //Check Min
  if (sec < 10 && min >= 10 && hour < 10) {
    time.textContent = "0" + hour + ":" + min + ":0" + sec;
  }
  if (sec < 10 && min >= 10 && hour >= 10) {
    time.textContent = "" + hour + ":0" + min + ":0" + sec;
  }
  //Check Hour
  if (sec < 10 && min < 10 && hour >= 10) {
    time.textContent = hour + ":0" + min + ":0" + sec;
  }
}

start.addEventListener("click", function() {
  if (on === false) {
    myFunction();
    on = true;
    start.classList.add("lock");
    stop.classList.remove("lock");
  }
});

stop.addEventListener("click", function() {
  clearTimeout(alertFuncTemplate);
  on = false;
  stop.classList.add("lock");
  start.classList.remove("lock");
});

reset.addEventListener("click", function() {
  window.location.reload();
});
