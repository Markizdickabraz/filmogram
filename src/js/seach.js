import NewAskServer from "./fetch-films";
const seachServer = new NewAskServer();

const STORAGE_KEY = 'genresId';
const STORAGE_PAGE = 'storagePage';
let currentRequest = ''; // for pagination

const form = document.querySelector('.search-form');
const searchFormInput = document.querySelector('.search-form__input');
const gallery = document.querySelector('.films__list');

form.addEventListener('submit', formHandler);

async function formHandler(event) {
    event.preventDefault();

    const request = searchFormInput.value.trim();
    if (!request) {
        return;
    }

    const response = await seachServer.fetchSearchId(request);

    if (response.length > 0) {
        currentRequest = request; // for pagination
        localStorage.setItem(STORAGE_PAGE, JSON.stringify(response));
        drawGallery();
    } else {
        console.log('Search result not successful. Enter the correct movie name and try again.');
        // error message generation must be here
    }
}

function drawGallery() {
    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
    const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
    const allGenresArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const filmList = JSON.parse(localStorage.getItem(STORAGE_PAGE));

    let markup = '';

    filmList.forEach(film => {
        let genres = '';

        film.genre_ids.forEach(genreId => {
            const currentGenre = allGenresArr.filter(elem => elem.id === genreId);
            genres = genres + currentGenre[0].name + ', ';
        })

        markup = markup + `
        <li class="films__card">
            <img class="films__img" src="${IMG_URL}${film.poster_path}" alt="${film.title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';"/>
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
