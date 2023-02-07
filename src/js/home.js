import NewAskServer from './fetch-films';
import loader from './spinner'

const gallery = document.querySelector('.films__list');
console.log('gallery', gallery);
const newAskServer = new NewAskServer();
const STORAGE_KEY = 'genresId';
const STORAGE_PAGE = 'storagePage';

saveInLocalStorageGenresId();
askServerByReting();

async function askServerByReting() {
  try {
    loader.spinner.show()
    const data = await newAskServer.fetchMovieRating();
    const result = data.data.results;
    localStorage.setItem(STORAGE_PAGE, JSON.stringify(result));
    console.log(result);
    renderMovieRatingPage(result);
    loader.spinner.close()

  } catch (error) {
    console.log(error.message);
  }
}

async function saveInLocalStorageGenresId() {
  try {
    const genreData = await newAskServer.fetchGenresId();
    console.log(genreData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(genreData));
  } catch (error) {
    console.log(error);
  }
}

function renderMovieRatingPage(result) {
  const IMGURL = `https://image.tmdb.org/t/p/w500/`;
  const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
  const getGenresJson = localStorage.getItem(STORAGE_KEY);
  const parseGenresJson = JSON.parse(getGenresJson);
  const markup = result
    .map(({ poster_path, title, genre_ids, release_date}) => {
      let genreArr = [];
      for (const genre of parseGenresJson) {
        if (genre_ids.includes(genre.id)) {
          genreArr.push(genre.name);
        }
      }
      return `
            <li class="films__card">
<img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';";"
/>
  <div class="films__desc">
    <h3 class="films__title">${title}</h3>
    <p class="films__genre">
    ${genreArr.slice(0, 2).join(", ")}
      <span>|</span>
      ${release_date.slice(0, 4)}
    </p>
  </div>
</li>
            `;
    })
    .join('');
  gallery.innerHTML = markup;
}
