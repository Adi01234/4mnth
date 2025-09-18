
// --- Модалка ---
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

// Функция открыть модалку
const openModal = () => {
    modal.style.display = "block";
};

// Функция закрыть модалку
const closeModal = () => {
    modal.style.display = "none";
};

// Закрытие по крестику
closeModalBtn.addEventListener("click", closeModal);

// 1) Отобразить через 10 секунд
setTimeout(openModal, 10000);

// 2) Отобразить при скролле до конца страницы
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        openModal();
    }
});

// --- Запрос к JSON ---
fetch("data.json") // укажи правильный путь к json (если рядом с main.js, то "./data.json")
    .then(response => response.json())
    .then(data => {
        console.log("Данные из JSON:", data);
    })
    .catch(error => console.error("Ошибка при загрузке JSON:", error));
fetch("./extra.json")
    .then(res => res.json())
    .then(data => {
        console.log("Данные из extra.json:", data);
    })
    .catch(err => console.error("Ошибка extra.json:", err));
