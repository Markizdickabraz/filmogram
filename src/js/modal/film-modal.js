const filmsList = document.querySelector('.films__list');
const modal = document.querySelector('.renderModal');
console.log(modal);
const STORAGE_PAGE = 'storagePage';
const backdrop = document.querySelector('.backdrop');

const IMGURL = `https://image.tmdb.org/t/p/w500/`;
let filmArr = [];

filmsList.addEventListener('click', modalOpen);

function modalOpen(e) {
    // if (e.target.className !== "films__card") {
    //     return;
    console.log(e.target);
    toggleModal();
    const getFilmsJson = localStorage.getItem(STORAGE_PAGE);
    const parseFilmsJson = JSON.parse(getFilmsJson);
    for (const film of parseFilmsJson) {
        if (film.title === e.target.alt) {
            filmArr.push(film);
                const markupModal = filmArr.map(({ poster_path, vote_average, vote_count, title, popularity, genre_ids, overview }) => {
                    return `
                            <div class="film-modal__thumb">
                                   <img class="film-modal__img" src="${IMGURL}${poster_path}" alt="${title}">
                               </div>
                           <!-- інформаційний контейнер -->
                               <div class="film-modal__info-container">
                                   <h2 class="film-modal__title">${title}</h2>
                                   <table class="film-modal__table">
                                       <tbody class="film-modal__cell1">
                                           <tr>
                                               <td class="film-modal__cell film-modal__modal-text"> Vote / Votes </td>
                                               <td class="film-modal__cell film-modal__modal-text"> 
                                                   <span class="film-modal__span film-modal__span-vote">${vote_average}</span> " / " <span class="film-modal__span film-modal__span--votes">${vote_count}</span></td>
                                           </tr>
                           
                                           <tr>
                                               <td class="film-modal__cell film-modal__modal-text"> Popularity </td>
                                               <td class="film-modal__cell film-modal__modal-text">${popularity} </td>
                                           </tr>
                           
                                           <tr>
                                               <td class="film-modal__cell film-modal__modal-text"> Oraginal Title </td>
                                               <td class="film-modal__cell film-modal__modal-text"> <span>${title}</span></td>
                                           </tr>
                           
                                           <tr>
                                               <td class="film-modal__cell film-modal__modal-text"> Genre </td>
                                               <td class="film-modal__cell film-modal__modal-text">${genre_ids}</td>
                                           </tr>
                                       </tbody>
                                   </table>
                           
                               <!-- Буде час сюди б я добавила кнопку запуску перегляду трейлера -->
                           
                           <!-- опис фільму -->
                                   <h3 class="film-modal__subtitle"> ABOUT </h3>
                                   <p class="fil-modal__text">${overview}</p>
                           
                           <!-- кнопки -->
                           <ul class="film-modal__btn-list">
                               <li class="film-modal__btn-item">
                                   <button class="button button-modal-btn button-accent-btn" type="" data-action="watch"> ADD TO WATCHED </button>
                               </li>
                               <li class="film-modal__btn-item">
                                   <button class="button button-modal-btn" type="" data-action="queue"> ADD TO QUEUE </button>
                               </li>
                           </ul>
           `
                }).join('');
            modal.innerHTML = markupModal;

            }

    }
    }

function toggleModal() {
    backdrop.classList.toggle("isHidden");
}

backdrop.addEventListener('click', closeModal);

function closeModal() {
    toggleModal();
    filmArr = [];
}