import axios from 'axios';

const http = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
});

// this will give us access to the .env file and our API key
const API_KEY = "Bearer " + import.meta.env.VITE_API_KEY;

const headers = {
    "Authorization": API_KEY,
}

export default {
    // our method to get all endpoints
    getQuotes(page = 1){
        const limit = 10;
        const offset = (page - 1) * limit;
        return http.get(`/quote?limit=${limit}&offset=${offset}`, {
            headers: headers
        });  
    },
    getMovies(){
        return http.get('/movie', {
            headers: headers
        });
    },
    getMovie(movieId){
        return http.get(`/movie/${movieId}`, {
            headers: headers
        });
    },
    getCharacters(){
        return http.get('/character', {
            headers: headers
        });
    },
    getCharacter(characterId){
        return http.get(`/character/${characterId}`, {
            headers: headers
        });
    },
    getCharactersList(page = 1){
        const limit = 10;
        const offset = (page - 1) * limit;
        return http.get(`/character?limit=${limit}&offset=${offset}`, {
            headers: headers
        });
    },
}