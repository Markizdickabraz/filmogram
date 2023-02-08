import NewAskServer from '../fetch-films';
import { getTrailer } from '../trailer';

const scroll = {
  disabledScroll() {
    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: 0;
    left:0;
    height: 100vh;
    width: 100vw;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px`
  },
  enabledScroll() {
    document.body.style.cssText = `
    position: relative;`;
    window.scroll({ top: scroll.scrollPosition })
  }
}

const movieAPI = new NewAskServer();
const filmsList = document.querySelector('.films__list');


const modal = document.querySelector('.renderModal');
const STORAGE_PAGE = 'storagePage';
const STORAGE_KEY = 'genresId';

const backdrop = document.querySelector('.backdrop');
const notFound = `https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d`;

const IMGURL = `https://image.tmdb.org/t/p/w500/`;
let filmArr = [];

if (filmsList) {
  filmsList.addEventListener('click', modalOpen);
}
export default function modalOpen(e) {
  // if (e.target.className !== "films__card") {
  //     return;
  
  if (e.target.className === "films__list" || e.target.className === "films-library__list") {
    return;
  }
  CloseModalClickEsc();
  scroll.disabledScroll();

  let parent = e.srcElement;
  while (parent.id != "film_card") {
    parent = parent.parentElement;
  }
  getTrailer(parent.dataset.id, movieAPI);

  backdrop.classList.remove('isHidden');
  const getFilmsJson = localStorage.getItem(STORAGE_PAGE);

  const parseFilmsJson = JSON.parse(getFilmsJson);
  for (let i = 0; i < parseFilmsJson.length; i += 1) {
    parseFilmsJson[i];
    if (
      parseFilmsJson[i].title === e.target.alt ||
      parseFilmsJson[i].title === e.target.textContent ||
      parseFilmsJson[i].title === e.target.parentElement.children[0].textContent
    ) {
      filmArr.push(parseFilmsJson[i]);
      const getGenresJson = localStorage.getItem(STORAGE_KEY);
      const parseGenresJson = JSON.parse(getGenresJson);
      const markupModal = filmArr

        .map(
          ({
            id,
            poster_path,
            vote_average,
            vote_count,
            title,
            popularity,
            genre_ids,
            overview,
          }) => {
            let genreArr = [];
            for (const genre of parseGenresJson) {
              if (genre_ids.includes(genre.id)) {
                genreArr.push(genre.name);
              }
            }

            return (
              localStorage.setItem('current-film-id', id),
              `<div class="film-modal" >
  <button
    class="film-modal__btn-icon"
    data-modal-close-p
    type="button"
    id="btnClose"
  >
  </button>
  <div class="film-modal__thumb">
    <img class="film-modal__img" src="${IMGURL}${poster_path}" alt="${title}" onerror="this.onerror=null; this.src='${notFound}';"/>
  </div>
  <div class="film-modal__info-container">
    <h2 class="film-modal__title">${title}</h2>
    <table class="film-modal__table">
      <tbody class="film-modal__cell1">
        <tr>
          <td class="film-modal__cell film-modal__modal-text">Vote / Votes</td>
          <td class="film-modal__cell film-modal__modal-text">
            <span class="film-modal__span film-modal__span-vote">${vote_average.toFixed(
              1
            )}</span> /
            <span class="film-modal__span film-modal__span--votes">${vote_count}</span>
          </td>
        </tr>
        <tr>
          <td class="film-modal__cell film-modal__modal-text">Popularity</td>
          <td class="film-modal__cell film-modal__modal-text--popularity">
            ${popularity}
          </td>
        </tr>
        <tr>
          <td class="film-modal__cell film-modal__modal-text">
            Original Title
          </td>
          <td class="film-modal__cell film-modal__modal-text--original">
            ${title}
          </td>
        </tr>
        <tr>
          <td class="film-modal__cell film-modal__modal-text">Genre</td>
          <td class="film-modal__cell film-modal__modal-text--genre">
            ${genreArr.join(', ')}
          </td>
        </tr>
      </tbody>
    </table>

    <button type='button' class='btn modal__btn button--trailer'>
    <img
      class='img-trailer'
      src=''
      id='btntrailer'
    />START TRAILER</button>

    <h3 class="film-modal__subtitle">ABOUT</h3>
    <p class="fil-modal__text">${overview}</p>
    <ul class="film-modal__btn-list">
      <li class="film-modal__btn-item">
        <button class="btn modal__btn" type="button" data-action="watch">
          ADD TO WATCHED
        </button>
      </li>
      <li class="film-modal__btn-item">
        <button class=" btn modal__btn" type="" data-action="queue">
          ADD TO QUEUE
        </button>
      </li>
    </ul>
  </div>
</div>`
            );
          }
        )
        .join('');
      modal.innerHTML = markupModal;
      const closeBtn = document.querySelector('#btnClose');
      closeBtn.addEventListener('click', onCloseBtnClick);
      // queue
      const btnAddToQueue = document.querySelector(
        'button[data-action="queue"]'
      );

      checkQueue();

      btnAddToQueue.addEventListener('click', addOnQueue);

      // watched

      const btnAddToWatch = document.querySelector(
        'button[data-action="watch"]'
      );

      checkWatch();

      btnAddToWatch.addEventListener('click', addOnWatch);
    }
  }
}

backdrop.addEventListener('click', closeModal);
function closeModal(e) {
   scroll.enabledScroll();
  if (e.target.classList[0] !== 'backdrop') {
    return;
  }
  backdrop.classList.add('isHidden');
  filmArr = [];
}

function CloseModalClickEsc() {
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') {
      return;
    }
    backdrop.classList.add('isHidden');
    filmArr = [];
  });
}

function onCloseBtnClick(e) {
  backdrop.classList.add('isHidden');
  filmArr = [];
}

function checkQueue() {
  if (localStorage.getItem('queue') == null) {
    return;
  }
  let currentqueue = JSON.parse(localStorage.getItem('queue'));
  let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

  if (currentqueue.find(movie => movie.id === idMovie)) {
    const btnAddToQueue = document.querySelector('button[data-action="queue"]');
    btnAddToQueue.textContent = 'DELETE FROM QUEUE';
  }
}

function checkWatch() {
  if (localStorage.getItem('watched') == null) {
    return;
  }
  let currentwatch = JSON.parse(localStorage.getItem('watched'));
  let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

  if (currentwatch.find(movie => movie.id === idMovie)) {
    const btnAddToWatch = document.querySelector('button[data-action="watch"]');
    btnAddToWatch.textContent = 'DELETE FROM WATCHED';
  }
}

function addOnQueue() {
  const btnAddToQueue = document.querySelector('button[data-action="queue"]');

  if (btnAddToQueue.textContent.trim() === 'ADD TO QUEUE') {
    let currentList = JSON.parse(localStorage.getItem('storagePage'));

    let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

    if (localStorage.getItem('queue') == null) {
      let one = currentList.filter(movie => movie.id === idMovie);
      localStorage.setItem('queue', JSON.stringify(one));
      btnAddToQueue.textContent = 'DELETE FROM QUEUE';

      return;
    }

    let currenQueue = JSON.parse(localStorage.getItem('queue'));

    let selectedMovie = currentList.filter(movie => movie.id === idMovie);
    currenQueue.push(selectedMovie[0]);

    localStorage.setItem('queue', JSON.stringify(currenQueue));
    btnAddToQueue.textContent = 'DELETE FROM QUEUE';
  } else {
    let currentList = JSON.parse(localStorage.getItem('queue'));

    let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

    const idForDElete = currentList.findIndex(option => option.id === idMovie);

    const deletedScores = currentList.splice(idForDElete, 1);

    btnAddToQueue.textContent = 'ADD TO QUEUE';
    localStorage.setItem('queue', JSON.stringify(currentList));
  }
}

function addOnWatch() {
  const btnAddToWatch = document.querySelector('button[data-action="watch"]');

  if (btnAddToWatch.textContent.trim() === 'ADD TO WATCHED') {
    let currentWatch = JSON.parse(localStorage.getItem('storagePage'));

    let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

    if (localStorage.getItem('watched') == null) {
      let one = currentWatch.filter(movie => movie.id === idMovie);
      localStorage.setItem('watched', JSON.stringify(one));
      btnAddToWatch.textContent = 'DELETE FROM WATCHED';

      return;
    }

    let currenWatch = JSON.parse(localStorage.getItem('watched'));

    let selectedMovie = currentWatch.filter(movie => movie.id === idMovie);
    currenWatch.push(selectedMovie[0]);

    localStorage.setItem('watched', JSON.stringify(currenWatch));
    btnAddToWatch.textContent = 'DELETE FROM WATCHED';
  } else {
    let currentWatch = JSON.parse(localStorage.getItem('watched'));

    let idMovie = JSON.parse(localStorage.getItem('current-film-id'));

    const idForDElete = currentWatch.findIndex(option => option.id === idMovie);

    const deletedScores = currentWatch.splice(idForDElete, 1);

    btnAddToWatch.textContent = 'ADD TO WATCHED';
    localStorage.setItem('watched', JSON.stringify(currentWatch));
  }
}


import throttle from 'lodash.throttle'

const scrollModal = document.querySelector('.film-modal');
window.addEventListener('scroll', throttle(onScroll, 150));

function onScroll() {
  const minimumPxToScroll = 150;
  if (window.scrollY > minimumPxToScroll) {
    scrollModal.classList.add(`transitionBtn`);
    scrollModal.classList.remove(`is-hidden-button`);
  }
  if (window.scrollY < minimumPxToScroll) {
    scrollModal.classList.add(`is-hidden-button`);
  }
}

export function toTop() {
  window.scrollTo(100, 100, 'smooth');
}

scrollModal.addEventListener('click', toTop); 