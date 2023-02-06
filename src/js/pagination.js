
import NewAskServer from "./fetch-films";
const seachServer = new NewAskServer();
import drawGallery from "./seach.js";
const STORAGE_KEY = 'genresId';
const STORAGE_PAGE = 'storagePage';
// const STORAGE_PAGE_NUMBER = 'storagePageNumber';
const STORAGE_CURRENT_REQUEST = 'currentRequest';
const STORAGE_TOTAL_PAGES = 'totalPages';

// example
// async function foo() {
//   const response = await seachServer.fetchSearchId('dog', 3);
//   localStorage.setItem(STORAGE_PAGE, JSON.stringify(response));
//   drawGallery();
// }

// foo();
//

async function goToPage(pageNumber) {
  const request = localStorage.getItem(STORAGE_CURRENT_REQUEST);
  const response = await seachServer.fetchSearchId(request, pageNumber);
  localStorage.setItem(STORAGE_PAGE, JSON.stringify(response));
  drawGallery();
}

// localStorage.setItem(STORAGE_CURRENT_REQUEST, 'dog');
// goToPage(1);


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



//

let currentPage = 1;  // necessary? // storage is better

let btns = document.querySelectorAll('.pagin-btn');

// prevDotsRef.style.display = "none";
prevDotsRef.style.display = "none";  // problems?? no
leftArrowRef.style.display = "none";  // problems?? yes
firstPageRef.style.display = "none";  // problems?? yes

// prevDotsRef.style.display = "none";  // problems??
// leftArrowRef.style.display = "none";  // problems??
// firstPageRef.style.display = "none";  // problems??
// firstPageRef.style.display = "inline";

function onPaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    // const totalPagesStr = localStorage.getItem(STORAGE_TOTAL_PAGES);
    const totalPages = Number(localStorage.getItem(STORAGE_TOTAL_PAGES));
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

    // gallery.innerHTML = '';
    goToPage(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function paginationReset(event) {
  // console.log('MuHA-HA!!!');
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

export { currentPage, defineResultsPerPage };