import { on } from 'process';
import NewAskServer from './fetch-films';

import saveInLocalStorageGenresId from './home'

import drawGallery from "./seach.js";
const STORAGE_PAGE = 'storagePage';
const searchFormInput = document.querySelector('.search-form__input');

const newAskServer = new NewAskServer();
const tags = document.getElementById('tags');
//const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=faab19b092cac6c59a97dec233a38f4d&`;

const STORAGE_TOTAL_PAGES = 'totalPages';
const paginationRef = document.querySelector('.pagination-container');
const STORAGE_GENRES = 'genresList';

let selectedGenge = [];
setGenres();

async function setGenres() {
  try {
    const genresById = JSON.parse(localStorage.getItem('genresId'))
    const tagsList = genresById.map(genre => {
      const li = document.createElement('li');
      li.classList.add('tag');
      li.id = genre.id;
      li.innerHTML = genre.name;
      li.addEventListener('click', () => {
        searchFormInput.value = '';
        li.classList.toggle('tag--active')
        if (selectedGenge.length == 0) {
          selectedGenge.push(genre.id);
        } else {
          if (selectedGenge.includes(genre.id)) {
            selectedGenge.map((id, idx) => {
              if (id == genre.id) {
                selectedGenge.splice(idx, 1);
              }
            });
          } else {
            selectedGenge.push(genre.id);
          }
        }
        // const selectedGengeStr = selectedGenge.join(', ');
        // console.log(selectedGengeStr)
        askServer(selectedGenge);
      });
      return li;
    });
    tags.append(...tagsList)
  } catch (error) {
    console.log(error);
  }
}

async function askServer(request) {
  try {
    const data = await newAskServer.fetchMovies(request);
    const result = data.data.results;

    localStorage.setItem(STORAGE_GENRES, request);
    localStorage.setItem(STORAGE_TOTAL_PAGES, data.data.total_pages);

    let paginationReset = new Event('reset');
    paginationRef.dispatchEvent(paginationReset);

    showFilteredMovies(result);

  } catch (error) {
    console.log(error.message);
  }
}

function showFilteredMovies(result) {
  localStorage.setItem(STORAGE_PAGE, JSON.stringify(result));
  drawGallery();
}

