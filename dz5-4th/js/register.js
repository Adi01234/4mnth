// https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/user

// Формат данных для регистрации
// {
//   username: "username",
//   password: "password"
// }
const API = "https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/user";

const form = document.querySelector(".register-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
        username: document.getElementById("username").value.trim(),
        password: document.getElementById("password").value.trim(),
    };

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (res.ok) {
            alert("Вы успешно зарегистрировались!");
            form.reset();
        } else {
            alert("Произошла ошибка");
        }
    } catch (error) {
        console.error("Ошибка при запросе:", error);
        alert("Произошла ошибка");
    }
});
