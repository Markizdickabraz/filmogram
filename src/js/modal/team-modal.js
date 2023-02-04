import * as basicLightbox from 'basiclightbox';
// import kirilUrl from '../images/team-kiril.jpeg';
// import katerynaUrl from '../images/team-kateryna.jpeg';
// import artemUrl from '../images/team-artem.jpeg';
// import markUrl from '../images/team-mark.jpeg';
// import maksymUrl from '../images/team-maksym.jpeg';
// import andriyUrl from '../images/team-andriy.jpeg';
// import vadymUrl from '../images/team-vadym.jpeg';
// import liudmylaUrl from '../images/team-liudmyla.jpg';
import iconsUrl from '../../images/icons.svg';

const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${kirilUrl}" alt="Kiril" class="team-image">
    <p class="team-name">Kiril</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/ttsiutsiura" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${katerynaUrl}" alt="Kateryna" class="team-image">
    <p class="team-name">Kateryna</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/panchenko-kate" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${artemUrl}" alt="Artem" class="team-image">
    <p class="team-name">Artem</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/ArtemS25" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${markUrl}" alt="Mark" class="team-image">
    <p class="team-name">Mark</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Markizdickabraz" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${maksymUrl}" alt="Maksym" class="team-image">
    <p class="team-name">Maksym</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Maksym-Plutenko" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${andriyUrl}" alt="Andriy" class="team-image">
    <p class="team-name">Andriy</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Andriyan78" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vadymUrl}" alt="Vadym" class="team-image">
    <p class="team-name">Vadym</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/aspirantmpm" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${liudmylaUrl}" alt="Liudmyla" class="team-image">
    <p class="team-name">Liudmyla</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/liudmyla-ch" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${iconsUrl}#icon-github"></use>
    </svg></a>
</div></div>`;
const container = document.querySelector('.js-team-modal');
container.addEventListener('click', openModal);
const modal = basicLightbox.create(markup);
function openModal(e) {
  modal.show();
  window.addEventListener('keydown', closeModalHandler);
  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
