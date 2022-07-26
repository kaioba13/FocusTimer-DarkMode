const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const buttonTree = document.querySelector(".tree");
const buttonCloud = document.querySelector(".cloud");
const buttonCoffe = document.querySelector(".coffee");
const buttonFirePlace = document.querySelector(".fireplace");

const buttonLight = document.querySelector(".light");
const buttonDark = document.querySelector(".dark");

const buttonSoundTree = new Audio("./media/Floresta.wav");
const buttonSoundCloud = new Audio("./media/Chuva.wav");
const buttonSoundCoffe = new Audio("./media/Cafeteria.wav");
const buttonSoundFirePlace = new Audio("./media/Lareira.wav");

let playNow;
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function stopSound() {
  if (playNow) {
    playNow.pause();
  }
}

function playSounds(sound) {
  stopSound();
  playNow = sound;
  playNow.loop = true;
  playNow.play();
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = seconds === 0 && minutes === 0;

    if (isFinished) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");

    countdown();
  }, 1000);
}

function pause() {
  clearTimeout(timerTimeOut);
  return;
}

function stop() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  countdown();
  playSounds(playNow);
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  pause();
  stopSound();
});

buttonStop.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
  stop();
});

buttonPlus.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent) + 5;
  if (minutes >= 25) {
    minutes = 25;
    updateTimerDisplay(minutes, 0);
  }
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
});

buttonMinus.addEventListener("click", function () {
  let minutes = Number(minutesDisplay.textContent) - 5;
  if (minutes <= 0) {
    minutes = 0;
  }
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
});

buttonTree.addEventListener("click", function () {
  buttonTree.classList.add("buttonSoundsActive");
  buttonCloud.classList.remove("buttonSoundsActive");
  buttonCoffe.classList.remove("buttonSoundsActive");
  buttonFirePlace.classList.remove("buttonSoundsActive");
  playSounds(buttonSoundTree);
});

buttonCloud.addEventListener("click", function () {
  buttonTree.classList.remove("buttonSoundsActive");
  buttonCloud.classList.add("buttonSoundsActive");
  buttonCoffe.classList.remove("buttonSoundsActive");
  buttonFirePlace.classList.remove("buttonSoundsActive");
  playSounds(buttonSoundCloud);
});

buttonCoffe.addEventListener("click", function () {
  buttonTree.classList.remove("buttonSoundsActive");
  buttonCloud.classList.remove("buttonSoundsActive");
  buttonCoffe.classList.add("buttonSoundsActive");
  buttonFirePlace.classList.remove("buttonSoundsActive");
  playSounds(buttonSoundCoffe);
});

buttonFirePlace.addEventListener("click", function () {
  buttonTree.classList.remove("buttonSoundsActive");
  buttonCloud.classList.remove("buttonSoundsActive");
  buttonCoffe.classList.remove("buttonSoundsActive");
  buttonFirePlace.classList.add("buttonSoundsActive");
  playSounds(buttonSoundFirePlace);
});

buttonLight.addEventListener("click", function () {
  buttonLight.classList.add("hide");
  buttonDark.classList.remove("hide");
  document.body.classList.add("dark-theme");
});

buttonDark.addEventListener("click", function () {
  buttonLight.classList.remove("hide");
  buttonDark.classList.add("hide");
  document.body.classList.remove("dark-theme");
});
