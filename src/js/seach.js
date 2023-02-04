import NewAskServer from "./fetch-films";
const seachServer = new NewAskServer();

const STORAGE_KEY = 'genresId';

const searchButton = document.querySelector('.search-button');
const searchFormInput = document.querySelector('.search-form__input');
const gallery = document.querySelector('.films__list');

searchButton.addEventListener('click', seachButtonHandler);

async function seachButtonHandler(event) {
    event.preventDefault();

    const request = searchFormInput.value.trim();
    if (!request) {
        return;
    }

    const response = await seachServer.fetchSearchId(request);

    if (response.length > 0) {
        drawGallery(response);
        // request saving logick needed
    } else {
        console.log('Search result not successful. Enter the correct movie name and try again.');
    }
}

function drawGallery(filmList) {
    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
    const allGenresArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
    let markup = '';

    filmList.forEach(film => {
        let genres = '';

        film.genre_ids.forEach(genreId => {
            const currentGenre = allGenresArr.filter(elem => elem.id === genreId);
            genres = genres + currentGenre[0].name + ', ';
        })

        markup = markup + `
        <li class="films__card">
            <img class="films__img" src="${IMG_URL}${film.poster_path}" alt="${film.title}" loading="lazy" />
            <div class="films__desc">
                <h3 class="films__title">${film.title}</h3>
                <p class="films__genre">
                    ${genres.slice(0, genres.length-2)}
                    <span>|</span>
                    ${film.release_date.slice(0, 4)}
                </p>
            </div>
        </li>`
    });

    gallery.innerHTML = markup;
}
