import axios from 'axios'; 

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =  '0f09f0e29eb26a1e28b4809ac59dbd60';

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`);
    return response;
    };

export function getMoviesID(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&page=1`);
    return response;
};

export function getSearchFilms(searchFilms) {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchFilm}page=1`);
    return response;
};

export function getActors(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response;
};

export function getAxiosReviews(movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response;
};
