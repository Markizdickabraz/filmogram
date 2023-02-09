import NewAskServer from "./fetch-films";
const seachServer = new NewAskServer();
import drawGallery from "./seach.js";
import { renderPageWached, renderPageQueue } from "./library.js";

const STORAGE_KEY = 'genresId';
const STORAGE_PAGE = 'storagePage';
const STORAGE_CURRENT_REQUEST = 'currentRequest';
const STORAGE_TOTAL_PAGES = 'totalPages';
const STORAGE_PAGINATION_TYPE = 'paginationType';
const STORAGE_PSEUDOPAGINATION_TYPE = 'pseudoPaginationType';

async function goToPage(pageNumber) {
  const paginationType = localStorage.getItem(STORAGE_PAGINATION_TYPE);
  const pseudoPaginationType = localStorage.getItem(STORAGE_PSEUDOPAGINATION_TYPE);
  const libraryMode = !!document.querySelector('.js-btn__queue');
  if (libraryMode) {
    if (pseudoPaginationType === 'wached') {
      renderPageWached(pageNumber);
    } else {
      renderPageQueue(pageNumber);
    }
  } else {
    if (paginationType === 'seach') {
      await goToPageSeach(pageNumber);
    } else if (paginationType === 'rating') {
      await goToPageRating(pageNumber);
    } else if (paginationType === 'genres') {

    } else {
      console.log('Unknown pagination type!');
    }
  }
}

async function goToPageSeach(pageNumber) {
  const request = localStorage.getItem(STORAGE_CURRENT_REQUEST);
  const response = await seachServer.fetchSearchId(request, pageNumber);
  localStorage.setItem(STORAGE_PAGE, JSON.stringify(response));
  drawGallery();
}

async function goToPageRating(pageNumber) {
  const response = await seachServer.fetchMovieRating(pageNumber);
  const result = response.data.results;
  localStorage.setItem(STORAGE_PAGE, JSON.stringify(result));
  drawGallery();
}

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-btn');
const lastPageRef = document.querySelector('.last-btn');
const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

paginationRef.addEventListener('click', onPaginationClick);
paginationRef.addEventListener('reset', paginationReset);

let currentPage = 1;

let btns = document.querySelectorAll('.pagin-btn');

prevDotsRef.style.display = "none";  
leftArrowRef.style.display = "none";  
firstPageRef.style.display = "none";  

function onPaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    let totalPages = Number(localStorage.getItem(STORAGE_TOTAL_PAGES));
    lastPageRef.textContent = totalPages;
    
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent);
    }

    prevDotsRef.style.display = "none";
    afterDotsRef.style.display = "none";

    if (event.target.classList.contains('pagin-btn')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      event.target.classList.add('pagination--current');
    }

    if (event.target.classList.contains('arrow-right') && currentPage < totalPages) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.classList.add('pagination--current');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = btn1Ref.textContent;
      checkPaginationEnd(totalPages);
    }

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
      checkPaginationStart();
    }

    if (event.target.classList.contains('first-btn')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination--current');
      currentPage = btn1Ref.textContent;
      leftArrowRef.style.display = "none";
      prevDotsRef.style.display = "none";
      firstPageRef.style.display = "none";
    }

    if (event.target.classList.contains('last-btn')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
      btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
      btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
      btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
      rightArrowRef.style.display = "none";
      afterDotsRef.style.display = "none";
      lastPageRef.style.display = "none";
    }

    if (Number(currentPage) > 5) {
      leftArrowRef.style.display = "inline";
      prevDotsRef.style.display = "inline";
      firstPageRef.style.display = "inline";
    } else {
      leftArrowRef.style.display = "none";
      prevDotsRef.style.display = "none";
      firstPageRef.style.display = "none";
    }

    if (Number(currentPage) < (totalPages - 4)) {
      rightArrowRef.style.display = "inline";
      afterDotsRef.style.display = "inline";
      lastPageRef.style.display = "inline";
    }

    goToPage(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function checkPaginationEnd(totalPages) {
  if ((totalPages - Number(currentPage)) < 5) {
    btns.forEach(el => el.classList.remove('pagination--current'));
    btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
    btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
    btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
    btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
    btn5Ref.textContent = lastPageRef.textContent;
    btn5Ref.classList.add('pagination--current');
    currentPage = btn5Ref.textContent;
    rightArrowRef.style.display = "none";
    afterDotsRef.style.display = "none";
    lastPageRef.style.display = "none";
  }
}

function checkPaginationStart() {
  if (Number(btn1Ref.textContent) < 1) {
    btns.forEach(el => el.classList.remove('pagination--current'));
    btn1Ref.textContent = 1;
    btn2Ref.textContent = 2;
    btn3Ref.textContent = 3;
    btn4Ref.textContent = 4;
    btn5Ref.textContent = 5;
    btn1Ref.classList.add('pagination--current');
    currentPage = btn5Ref.textContent;
    leftArrowRef.style.display = "none";
    prevDotsRef.style.display = "none";
    firstPageRef.style.display = "none";
  }
}

function paginationReset(event) {
  afterDotsRef.style.display = "inline";
  rightArrowRef.style.display = "inline";
  lastPageRef.style.display = "inline";
  btn2Ref.style.display = "inline";
  btn3Ref.style.display = "inline";
  btn4Ref.style.display = "inline";
  btn5Ref.style.display = "inline";

  btns.forEach(el => el.classList.remove('pagination--current'));
  btn1Ref.textContent = 1;
  btn2Ref.textContent = 2;
  btn3Ref.textContent = 3;
  btn4Ref.textContent = 4;
  btn5Ref.textContent = 5;
  btn1Ref.classList.add('pagination--current');
  currentPage = btn1Ref.textContent;
  leftArrowRef.style.display = "none";
  prevDotsRef.style.display = "none";
  firstPageRef.style.display = "none";
  const totalPages = Number(localStorage.getItem(STORAGE_TOTAL_PAGES));
  lastPageRef.textContent = totalPages;
  if (totalPages < 7) {
    shortenButtonList(totalPages);
  }
}

function shortenButtonList(totalPages) {
  afterDotsRef.style.display = "none";
  rightArrowRef.style.display = "none";
  if (totalPages < 6) {
    lastPageRef.style.display = "none";
  }
  if (totalPages < 5) {
    btn5Ref.style.display = "none";
  }
  if (totalPages < 4) {
    btn4Ref.style.display = "none";
  }
  if (totalPages < 3) {
    btn3Ref.style.display = "none";
  }
  if (totalPages < 2) {
    btn2Ref.style.display = "none";
  }
}

let pageSize = 9;

function defineResultsPerPage() {
  if (window.innerWidth >= 1024) {
    pageSize = 9;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    pageSize = 8;
  } else if (window.innerWidth < 768) {
    pageSize = 4;
  }
  return pageSize;
}

// const queueBtn = document.querySelector('.js-btn__queue');
// if (queueBtn) {
//   localStorage.setItem('paginationType', 'huita');
//   console.log('its works!');
//   console.log(localStorage.getItem('paginationType'));
// }

export { currentPage, defineResultsPerPage };
