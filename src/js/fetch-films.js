import axios from 'axios';

export default class NewAskServer {
  constructor() {
    this.api_key = `api_key=faab19b092cac6c59a97dec233a38f4d`;
  }

  async fetchMovieRating() {
    try {
      this.BASEURL = `https://api.themoviedb.org/3/trending/movie/day?`;
      const response = await axios.get(`${this.BASEURL}${this.api_key}`);
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
    this.BASEURL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?`;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?${this.api_key}&language=en-US&page=${page}&include_adult=false&query=${request}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}
