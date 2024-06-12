<template>
    <div v-if="posterPath">
        <img v-bind:src="`https://image.tmdb.org/t/p/original${posterPath}`" alt="Movie Poster">
    </div>
    <div v-else>
        <p>No poster available</p>
    </div>
</template>

<script>
import MovieServce from '../services/MovieDBService';

export default {
    props: {
        tmdbMovieId: {
            type: Number,
            required: true
        },
        tmdbCollectionId: {
            type: Number,
            required: false
        },
    },
    data() {
        return {
            posterPath: '',
        };
    },
    created() {
        this.fetchPoster();
    },
    methods : {
        fetchPoster() {
            if (this.tmdbMovieId){
                MovieServce.getMovieDetails(this.tmdbMovieId)
                .then(response => {
                    console.log("This is a movie poster link: " + response.data.poster_path);
                    this.posterPath = response.data.poster_path;
                })
                .catch(error => {
                    console.error(error);
                })
            }
            else if (this.tmdbCollectionId){
                MovieServce.getCollectionDetails(this.tmdbCollectionId)
                .then(response => {
                    console.log("This is a collection poster link: " + response.data.poster_path);
                    this.posterPath = response.data.poster_path;
                })
                .catch(error => {
                    console.error(error);
                })
            }
        }
    }
}
</script>

<style scoped>
img {
    width: 20%;
}

</style>