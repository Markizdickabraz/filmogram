import { on } from 'process';
import NewAskServer from './fetch-films';
const newAskServer = new NewAskServer();
const tags = document.getElementById('tags');
const STORAGE_KEY = 'genresId';
const gallery = document.querySelector('.films__list');
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=faab19b092cac6c59a97dec233a38f4d&`;

const STORAGE_TOTAL_PAGES = 'totalPages';
const paginationRef = document.querySelector('.pagination-container');
const STORAGE_GENRES = 'genresList';

let selectedGenge = [];
setGenres();

async function setGenres() {
  try {
    const genreData = await newAskServer.fetchGenresId();
    console.log(genreData);
    // data = JSON.stringify(genreData);
    genreData.forEach(genre => {
      const li = document.createElement('li');
      li.classList.add('tag');
      li.id = genre.id;
      li.innerHTML = genre.name;
      tags.append(li);
      li.addEventListener('click', () => {
        li.classList.toggle('tag--active')
        if (selectedGenge.length == 0) {
          selectedGenge.push(genre.id);
        } else {
          if (selectedGenge.includes(genre.id)) {
            selectedGenge.forEach((id, idx) => {
              if (id == genre.id) {
                selectedGenge.splice(idx, 1);
              }
            });
          } else {
            selectedGenge.push(genre.id);
          }
        }
        console.log(selectedGenge);
        const selectedGengeStr = selectedGenge.join(',');
        askServer(selectedGengeStr);
      });
      //   tags.append(li);
    });
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
    console.log(data.data.total_pages);
    let paginationReset = new Event('reset');
    paginationRef.dispatchEvent(paginationReset);

    // console.log(result);
    showFilteredMovies(result);
  } catch (error) {
    console.log(error.message);
  }
}

export default function showFilteredMovies(result) {
  const IMGURL = `https://image.tmdb.org/t/p/w500/`;
  const getGenresJson = localStorage.getItem(STORAGE_KEY);
  const parseGenresJson = JSON.parse(getGenresJson);
  const markup = result
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      let genreArr = [];
      for (const genre of parseGenresJson) {
        if (genre_ids.includes(genre.id)) {
          genreArr.push(genre.name);
          // console.log(genreArr)
        }
      }
      return `
            <li class="films__card" data-id="${id}" id="film_card">
  <img class="films__img" src="${IMGURL}${poster_path}" alt="${title}" loading="lazy" />
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
  gallery.innerHTML = markup;
}
