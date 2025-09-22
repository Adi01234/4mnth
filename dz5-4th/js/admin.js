const formElem = document.querySelector("#movieForm");
const statusElem = document.querySelector(".status");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const movie = {
    name: document.querySelector(".movie-form #name").value,
    releaseDate: document.querySelector(".movie-form #releaseDate").value,
    bannerImage: document.querySelector(".movie-form #bannerImage").value,
    cardImage: document.querySelector(".movie-form #cardImage").value,
    rating: +document.querySelector(".movie-form #rating").value,
    description: document.querySelector(".movie-form #description").value,
    genres: document
      .querySelector(".movie-form #genres")
      .value.split(",")
      .map((str) => str.trim("")),
  };

  fetch("https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/movie", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  })
    .then((response) => {
      if (response.ok) response.json();
      else throw new Error(response.statusText);
    })
    .catch(() => {
      statusElem.innerHTML = "Ошибка";
      statusElem.classList.add("status");
      statusElem.classList.add("error");
    })
    .then(() => {
      statusElem.innerHTML = "Фильм успешно добавился";
      statusElem.classList.add("status");
      statusElem.classList.add("success");
    });

  console.log(movie);
});
