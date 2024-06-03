<template>
    <div>
        <div v-for="movie in movies" v-bind:key="movie.movieId">
            <router-link v-bind:to="{name: 'movieDetailView', params: {movieId: movie._id}}">
                {{ movie.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';

export default {
    data() {
        return {
            movies: []
        }
    },
    created() {
        lotrService.getMovies()
            .then(response => {
                this.movies = response.data.docs;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>