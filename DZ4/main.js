const bannerElem = document.querySelector(".banner__wrapper");
let moviesWithBanner = [];
const buttonPrevElem = document.querySelector(".banner .arrow-prev");
const buttonNextElem = document.querySelector(".banner .arrow-next");

let bannerI = 0;
let interval;

const setBanner = () => {
  if (moviesWithBanner.length)
    bannerElem.style.backgroundImage = `url(${moviesWithBanner[bannerI].bannerImage})`;
};

const slideNext = () => {
  if (bannerI < moviesWithBanner.length - 1) bannerI++;
  else bannerI = 0;

  setBanner();
};

const autoSlide = () => {
  interval = setInterval(slideNext, 3000);
};

buttonNextElem.addEventListener("click", () => {
  clearInterval(interval);
  autoSlide();
  slideNext();
});

buttonPrevElem.addEventListener("click", () => {
  clearInterval(interval);
  autoSlide();
  if (bannerI <= 0) bannerI = moviesWithBanner.length - 1;
  else bannerI--;

  setBanner();
});

const moviesWrapperElem = document.querySelector(".movies__inner");

const setMovies = (movies) => {
  moviesWithBanner = movies.filter((movie) => movie.bannerImage);
  setBanner();
  autoSlide();

  movies.forEach((movie, i) => {
    moviesWrapperElem.innerHTML += `
          <div id="movie${i}" class="movie">
            <div style="background-image: url(${
              movie.cardImage
            })" class="movie__image">
              <div class="rating">${movie.rating}</div>
            </div>
            <div class="movie__info">
              <h3>${movie.name}</h3>
              <div class="stars">
                ${Array.from({ length: movie.rating })
                  .map(() => `<img src="icons/star.png" alt="star" />`)
                  .join("")}
                    ${Array.from({ length: 5 - movie.rating })
                      .map(
                        () => `<img src="icons/star-empty.png" alt="star" />`
                      )
                      .join("")}
              </div>
              <p>
               ${movie.description}
              </p>
              <div class="movie__item">
                <span class="movie__item-title">Дата выхода:</span>
                <span>${movie.releaseDate}</span>
              </div>
              <div class="movie__item">
                <span class="movie__item-title">Жанр:</span>
                <span>${movie.genres.join(", ")}</span>
              </div>
            </div>
          </div>`;
  });
};

const getMovies = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    setMovies(JSON.parse(xhr.response));
  };
};
getMovies();


const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".cross");

const openModal = () => {
    modal.style.display = "block";
};

const closeModal = () => {
    modal.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);

setTimeout(openModal, 10000);

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        openModal();
    }
});

const getExtraJSON = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "extra.json");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();

    xhr.onload = () => {
        console.log(JSON.parse(xhr.response))
    };
};

getExtraJSON();