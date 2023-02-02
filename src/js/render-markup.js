import NewAskServer from "./fetch-films";

const gallery = document.querySelector('.cards__list');
console.log('gallery', gallery);
const newAskServer = new NewAskServer();
// const STORAGE_KEY = 'genresId';

askServerByReting();
saveInLocalStorageGenresId();

async function saveInLocalStorageGenresId() {
    try {
        const genreData = await newAskServer.fetchGenresId();
        console.log(genreData);
   }
    catch (error) {
        console.log(error);
    }
};


async function askServerByReting() {
    try {
        const data = await newAskServer.fetchMovieRating();
        const result = data.data.results;
        console.log(result);
        renderMovieRatingPage(result);
    }
    catch (error) {
        console.log(error.message);
    }
};

function renderMovieRatingPage(result) {
    const IMGURL = `https://image.tmdb.org/t/p/w500/`;
    const markup = result.map(
        ({ poster_path, title,genre_ids, release_date }) => {
            return `
            <li>
             <img class="gallery__image" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" />
             <p>${title}</p>
             <p>${genre_ids}</p>
             <p>${release_date}</p>
            </li>
            `;
        }
    ).join('');
    gallery.innerHTML = markup;
}
