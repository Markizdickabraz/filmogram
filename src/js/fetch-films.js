import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class NewAskServer {

  #API_KEY = 'faab19b092cac6c59a97dec233a38f4d';
  totalMovies = 0;
  query = '';
  genres = [];

  constructor() {
    this.api_key = `api_key=faab19b092cac6c59a97dec233a38f4d`;
    this.STORAGE_PAGINATION_TYPE = 'paginationType';
  }

  async fetchMovieRating(page = 1) {
    try {
      this.BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
      const ending = '&page='+page;
      const response = await axios.get(`${this.BASEURL}${this.api_key}${ending}`);
      localStorage.setItem(this.STORAGE_PAGINATION_TYPE, 'rating');
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchGenresId() {
    this.BASEURLGENRES = `https://api.themoviedb.org/3/genre/movie/list?`;
    try {
      const resultGenresId = await axios.get(
        `${this.BASEURLGENRES}${this.api_key}`
      );
      return resultGenresId.data.genres;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSearchId(request, page = 1) {
    this.STORAGE_TOTAL_PAGES = 'totalPages';
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?${this.api_key}&language=en-US&page=${page}&include_adult=false&query=${request}`
      );
      localStorage.setItem(this.STORAGE_TOTAL_PAGES, response.data.total_pages);
      localStorage.setItem(this.STORAGE_PAGINATION_TYPE, 'seach');
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTrailerById(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
    });
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?${params}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    });
  }

  async fetchMovies(request = '') {
    this.BASEURL_MOVIES = `https://api.themoviedb.org/3/discover/movie?${this.api_key}&with_genres=`;
      try {
        const response = await axios.get(
          `${this.BASEURL_MOVIES}${request}`
        );
        return response;
      } catch (error) {
        console.log(error);
    }
  }
}
