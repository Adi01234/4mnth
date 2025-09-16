const bannerElem = document.querySelector(".banner__wrapper");
const moviesWithBanner = movies.filter((movie) => movie.bannerImage);
const buttonPrevElem = document.querySelector(".banner .arrow-prev");
const buttonNextElem = document.querySelector(".banner .arrow-next");

let bannerI = 0;
let autoSlideInterval;

// Устанавливаем баннер
const setBanner = () => {
    bannerElem.style.backgroundImage = `url(${moviesWithBanner[bannerI].bannerImage})`;
};

// Функция запуска автослайдера
const startAutoSlide = () => {
    stopAutoSlide(); // сброс перед запуском
    autoSlideInterval = setInterval(() => {
        bannerI = (bannerI + 1) % moviesWithBanner.length;
        setBanner();
    }, 3000);
};

// Остановка автослайдера
const stopAutoSlide = () => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
};

// Обработчики кнопок
buttonNextElem.addEventListener("click", () => {
    bannerI = (bannerI + 1) % moviesWithBanner.length;
    setBanner();
    startAutoSlide(); // сброс таймера
});

buttonPrevElem.addEventListener("click", () => {
    bannerI = (bannerI - 1 + moviesWithBanner.length) % moviesWithBanner.length;
    setBanner();
    startAutoSlide(); // сброс таймера
});

// Инициализация
setBanner();
startAutoSlide();

// Отображение фильмов
const moviesWrapperElem = document.querySelector(".movies__inner");

movies.forEach((movie, i) => {
    moviesWrapperElem.innerHTML += `
    <div id="movie${i}" class="movie">
      <div class="movie__image">
        <div class="rating">${movie.rating}</div>
      </div>
      <div class="movie__info">
        <h3>${movie.name}</h3>
        <div class="stars">
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star.png" alt="" />
          <img src="icons/star-empty.png" alt="" />
        </div>
        <p>${movie.description}</p>
        <div class="movie__item">
          <span class="movie__item-title">Дата выхода:</span>
          <span>${movie.releaseDate}</span>
        </div>
        <div class="movie__item">
          <span class="movie__item-title">Жанр</span>
          <span>${movie.genres}</span>
        </div>
      </div>
    </div>`;
});

