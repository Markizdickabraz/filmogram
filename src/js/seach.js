import NewAskServer from './fetch-films';
import loader from './spinner';

const seachServer = new NewAskServer();
const header = document.querySelector('header');
console.log(header);

const STORAGE_KEY = 'genresId';
const STORAGE_PAGE = 'storagePage';
let currentRequest = ''; // for pagination

const form = document.querySelector('.search-form');
const searchFormInput = document.querySelector('.search-form__input');
const gallery = document.querySelector('.films__list');
const badRequest = document.querySelector('.bad-request')

form.addEventListener('submit', formHandler);

async function formHandler(event) {
  event.preventDefault();
  badRequest.innerHTML = ""
  

  const request = searchFormInput.value.trim();
  if (!request) {
    return;
  }
  loader.spinner.show();

  const response = await seachServer.fetchSearchId(request);
  

  if (response.length > 0) {
    currentRequest = request; // for pagination
    localStorage.setItem(STORAGE_PAGE, JSON.stringify(response));
    drawGallery();
  } else {
    loader.spinner.close();
    badRequest.innerHTML = 'Search result not successful. Enter the correct movie name and try again.';
    console.log(
      'Search result not successful. Enter the correct movie name and try again.'
    );
    // error message generation must be here
  }
  loader.spinner.close();
}

function drawGallery() {
    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
    const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
    const allGenresArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const filmList = JSON.parse(localStorage.getItem(STORAGE_PAGE));


  let markup = '';

  filmList.forEach(film => {
    let genres = [];

    film.genre_ids.forEach(genreId => {
      const currentGenre = allGenresArr.filter(elem => elem.id === genreId);
      genres.push(currentGenre[0].name);
    });

    markup =
      markup +
      `
        <li class="films__card">
            <img class="films__img" src="${IMG_URL}${film.poster_path}" alt="${film.title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';"/>

            <div class="films__desc">
                <h3 class="films__title">${film.title}</h3>
                <p class="films__genre">
                    ${genres.slice(0, 2).join(', ')}
                    <span>|</span>
                    ${film.release_date.slice(0, 4)}
                </p>
            </div>
        </li>`;
  });

  gallery.innerHTML = markup;
}
