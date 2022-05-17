const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMoreTime = document.querySelector(".more-time");
const buttonLessTime = document.querySelector(".less-time");
const buttonFlorest = document.querySelector(".florest");
const buttonRain = document.querySelector(".rain");
const buttonCoffeeShop = document.querySelector(".coffeeshop");
const buttonFireplace = document.querySelector(".fire");
const buttonRange = document.querySelector("#range");
let minutesDisplay = document.querySelector(".minutes");
let secondsDisplay = document.querySelector(".seconds");
let minutes;
let seconds;
let timerTimeOut;
const soundFlorest = new Audio("./media/Floresta.wav");
const soundRain = new Audio("./media/Chuva.wav");
const soundCoffeeshop = new Audio("./media/Cafeteria.wav");
const soundFireplace = new Audio("./media/Lareira.wav");
soundFlorest.loop = true;
soundRain.loop = true;
soundCoffeeshop.loop = true;
soundFireplace.loop = true;

function rangeselected() {
  if (buttonRange.classList.contains("selectedrange")) {
    buttonRange.classList.remove("selectedrange");
  } else {
    buttonRange.classList.add("selectedrange");
  }
}

function moreTime() {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
}

function lessTime() {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String(minutes - 5).padStart(2, "0");
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if (minutes <= 0 && seconds <= 0) {
      soundCoffeeshop.pause();
      soundFireplace.pause();
      soundFlorest.pause();
      soundRain.pause();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    countdown();
  }, 1000);
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");

  countdown();
});

buttonStop.addEventListener("click", function () {
  clearTimeout(timerTimeOut);
});

buttonMoreTime.addEventListener("click", function () {
  moreTime();
});

buttonLessTime.addEventListener("click", function () {
  lessTime();
});

buttonFlorest.addEventListener("click", function () {
  if (soundFlorest.paused) soundFlorest.play();
  else soundFlorest.pause();

  if (buttonFlorest.classList.contains("selected")) {
    buttonFlorest.classList.remove("selected");
  } else {
    buttonFlorest.classList.add("selected");
  }
  rangeselected();
});

buttonRain.addEventListener("click", function () {
  if (soundRain.paused) soundRain.play();
  else soundRain.pause();

  if (buttonRain.classList.contains("selected")) {
    buttonRain.classList.remove("selected");
  } else {
    buttonRain.classList.add("selected");
  }
  rangeselected();
});

buttonCoffeeShop.addEventListener("click", function () {
  if (soundCoffeeshop.paused) soundCoffeeshop.play();
  else soundCoffeeshop.pause();

  if (buttonCoffeeShop.classList.contains("selected")) {
    buttonCoffeeShop.classList.remove("selected");
  } else {
    buttonCoffeeShop.classList.add("selected");
  }
  rangeselected();
});

buttonFireplace.addEventListener("click", function () {
  if (soundFireplace.paused) soundFireplace.play();
  else soundFireplace.pause();

  if (buttonFireplace.classList.contains("selected")) {
    buttonFireplace.classList.remove("selected");
  } else {
    buttonFireplace.classList.add("selected");
  }
  rangeselected();
});
