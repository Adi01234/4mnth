const form = document.getElementById("form");
const emailInput = document.getElementById("form-email");
const phoneInput = document.getElementById("form-phone-number");
const submitBtn = document.getElementById("form-submit");

submitBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();


    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
        alert("Email валиден ✅");
    } else {
        alert("Введите корректный Gmail-адрес ❌");
    }
});

const block = document.getElementById("block");
const parent = block.parentElement;

let pos = 0;


block.style.position = "relative";
block.style.left = "0px";

function moveRight() {

    const parentWidth = parent.offsetWidth;
    const blockWidth = block.offsetWidth;

    if (pos < parentWidth - blockWidth) {
        pos += 2; // шаг движения
        block.style.left = `${pos}px`;



        requestAnimationFrame(moveRight);
    }
}

block.addEventListener("click", () => {
    pos = 0; // сброс позиции перед новым запуском
    block.style.left = "0px";
    moveRight();
});
