// import {
//   watched,
//   queue,
//   setWatchedLocalStoradge,
//   setQueueLocalStoradge,
// } from './local-strage';

// export function onAddToWatched(id) {
//   if (watched.includes(id)) {
//     return;
//   }
//   currentFilmID().push(id);
//   setWatchedLocalStoradge(watched);
// }

// export function onAddToQueue(id) {
//   if (queue.includes(id)) {
//     return;
//   }
//   queue.push(id);
//   setQueueLocalStoradge(queue);
// }
// const currentFilmID = () => {
//   return Number(sessionStorage.getItem('current-film-id'));
// };

// const refs = {
//   btnWatch: document.querySelector('[data-action="watch"]'),
//   btnQueue: document.querySelector('[data-action="queue"]'),
// };

// refs.btnWatch.addEventListener('click', addToWached);
// function addToWached(id) {
//   Number(sessionStorage.getItem('current-film-id'));
// }
