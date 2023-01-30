import axios from 'axios'; 

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =  '0f09f0e29eb26a1e28b4809ac59dbd60';

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response;
    };