import modalOpen from './modal/film-modal';

const STORAGE_PAGE = 'storagePage';
const STORAGE_KEY = 'genresId';

const watchBtn = document.querySelector('.js-btn__watched');
const queueBtn = document.querySelector('.js-btn__queue');
const libraryList = document.querySelector('.films-library__list');

queueBtn.addEventListener('click', e => {
  // e.preventDefault();

  watchBtn.classList.remove('isActive') ||
    queueBtn.classList.add('isActive') ||
    renderPageQueue();
});
watchBtn.addEventListener('click', e => {
  // e.preventDefault();
  renderPageWached();
  if (watchBtn.classList[3] !== 'isActive')
    watchBtn.classList.add('isActive') ||
      queueBtn.classList.remove('isActive' || renderPageWached());
});

// renderLibrary();
// console.dir(watchBtn);
// console.dir(queueBtn);
// function renderLibrary() {
//   if (watchBtn.classList[3] === 'isActive') {
//     console.dir(watchBtn);
//     renderPageWached();
//   }
// }

// if (queueBtn.classList[3] === 'isActive') {
//   renderPageQueue();
//   console.dir(queueBtn);
// }

export function renderPageWached() {
  const watchPageJson = localStorage.getItem('watched');
  const parseWatched = JSON.parse(watchPageJson);
  console.log(watchPageJson);
  const getGenresJson = localStorage.getItem(STORAGE_KEY);
  const parseGenresJson = JSON.parse(getGenresJson);
  const IMGURL = `https://image.tmdb.org/t/p/w500/`;
  const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
  const markupPage = parseWatched
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      let genreArr = [];
      for (const genre of parseGenresJson) {
        if (genre_ids.includes(genre.id)) {
          genreArr.push(genre.name);
        }
      }

      return `
            <li class="films__card" data-id="${id}" id="film_card">
<img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';";"
/>
  <div class="films__desc">
    <h3 class="films__title">${title}</h3>
    <p class="films__genre">
    ${genreArr.slice(0, 2).join(', ')}
      <span>|</span>
      ${release_date.slice(0, 4)}
    </p>
  </div>
</li>
            `;
    })
    .join('');
  libraryList.innerHTML = markupPage;
}
export function renderPageQueue() {
  const queuePageJson = localStorage.getItem('queue');
  const parseQueue = JSON.parse(queuePageJson);
  console.log(queuePageJson);
  const getGenresJson = localStorage.getItem(STORAGE_KEY);
  const parseGenresJson = JSON.parse(getGenresJson);
  const IMGURL = `https://image.tmdb.org/t/p/w500/`;
  const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;
  const markupPage = parseQueue
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      let genreArr = [];
      for (const genre of parseGenresJson) {
        if (genre_ids.includes(genre.id)) {
          genreArr.push(genre.name);
        }
      }
      return `
            <li class="films__card" data-id="${id}" id="film_card">
<img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${notFound}';";"
/>
  <div class="films__desc">
    <h3 class="films__title">${title}</h3>
    <p class="films__genre">
    ${genreArr.slice(0, 2).join(', ')}
      <span>|</span>
      ${release_date.slice(0, 4)}
    </p>
  </div>
</li>
            `;
    })
    .join('');
  libraryList.innerHTML = markupPage;
}

if (libraryList) {
  libraryList.addEventListener('click', modalOpen);
}
// asda
