import BigPicture from 'bigpicture';

export function getTrailer(filmId, movieAPI) {
  try {
    movieAPI.fetchTrailerById(filmId).then(result => {
      const trailers = result.results;
      const trailerBtn = document.querySelector('.button--trailer');
      if (trailers.length > 0) {
        trailerBtn.classList.remove('is-hidden');
        const officialTrailer = trailers.find(
          el =>
            el.name === 'Official Trailer' ||
            el.name.includes('Official') ||
            el.name[0]
        );
        const trailerKey = officialTrailer.key;

        trailerBtn.addEventListener('click', ontrailerBtnClick);

        function ontrailerBtnClick(e) {
          BigPicture({
            el: e.target,
            ytSrc: `${trailerKey}`,
          });
        }
      }
      else {
        trailerBtn.innerHTML = "Trailer Not Found"
      }
    });
  } catch {
    er => {
      console.log(er);
    };
  }
}