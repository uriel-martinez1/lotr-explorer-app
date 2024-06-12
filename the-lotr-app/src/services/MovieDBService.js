import axios from "axios";

const http = axios.create({ 
    baseURL: "https://api.themoviedb.org/3" 
});

const API_KEY = "Bearer " + import.meta.env.VITE_MOVIEDB_BEARER_TOKEN;

const header = {
    "Authorization": API_KEY,
}

export default {
    getMovieDetails(movieId){
        return http.get(`/movie/${movieId}?language=en-US`, {
            headers: header
        });
    },
    getCollectionDetails(collectionId){
        return http.get(`/collection/${collectionId}?language=en-US`, {
            headers: header
        });
    },
    getTVShowDetails(tvSeriesId){
        return http.get(`/tv/${tvSeriesId}?language=en-US`, {
            headers: header
        });
    }
}