// ----------------- ДЗ 1 -----------------
const block = document.getElementById("block");
const parent = block.parentElement;


block.style.position = "absolute";
block.style.top = "0px";
block.style.left = "0px";

let posX = 0;
let posY = 0;
let direction = "right";

function moveAround() {
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    const blockWidth = block.offsetWidth;
    const blockHeight = block.offsetHeight;

    if (direction === "right") {
        if (posX < parentWidth - blockWidth) {
            posX += 2;
        } else {
            direction = "down";
        }
    } else if (direction === "down") {
        if (posY < parentHeight - blockHeight) {
            posY += 2;
        } else {
            direction = "left";
        }
    } else if (direction === "left") {
        if (posX > 0) {
            posX -= 2;
        } else {
            direction = "up";
        }
    } else if (direction === "up") {
        if (posY > 0) {
            posY -= 2;
        } else {
            direction = "right";
        }
    }

    block.style.left = `${posX}px`;
    block.style.top = `${posY}px`;

    requestAnimationFrame(moveAround);
}


moveAround();


// ----------------- ДЗ 2 -----------------
const section2 = document.querySelector(".wrapper__section:nth-child(3)");

// создаём элементы
const timerDisplay = document.createElement("h3");
timerDisplay.id = "timer";
timerDisplay.textContent = "10"; // стартовое значение

const startBtn = document.createElement("button");
startBtn.textContent = "Начать";

const pauseBtn = document.createElement("button");
pauseBtn.textContent = "Пауза";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Заново";

// добавляем их в секцию
section2.appendChild(timerDisplay);
section2.appendChild(startBtn);
section2.appendChild(pauseBtn);
section2.appendChild(resetBtn);

let countdownValue = 10; // можно менять стартовое число
let intervalId = null;

function countdown(start) {
    countdownValue = start;
    timerDisplay.textContent = countdownValue;
}

function startCountdown() {
    if (intervalId) return; // если уже идёт - не запускать заново
    intervalId = setInterval(() => {
        if (countdownValue > 0) {
            countdownValue--;
            timerDisplay.textContent = countdownValue;
        } else {
            clearInterval(intervalId);
            intervalId = null;
            alert("Время вышло!");
        }
    }, 1000);
}

function pauseCountdown() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetCountdown() {
    pauseCountdown();
    countdown(10); // снова 10
}

startBtn.addEventListener("click", startCountdown);
pauseBtn.addEventListener("click", pauseCountdown);
resetBtn.addEventListener("click", resetCountdown);

// Инициализация
countdown(10);
