<template>
    <div>
        <div v-for="movie in movies" v-bind:key="movie.movieId">
            <router-link v-bind:to="{ name: 'movieDetailView', params: { movieId: movie._id } }">
                {{ movie.name }}
                <MoviePoster :tmdbMovieId="getTmdbMovieId(movie.name)" :tmdbCollectionId="getTmdbCollectionId(movie.name)" />
            </router-link>
        </div>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';
import MoviePoster from './MoviePoster.vue';

export default {
    components: {
        MoviePoster
    },
    data() {
        return {
            movies: [],
            // tmdbMovieIds: {
            //     "The Unexpected Journey": 49051,
            //     "The Desolation of Smaug": 57158,
            //     "The Battle of the Five Armies": 122917,
            //     "The Fellowship of the Ring": 120,
            //     "The Two Towers": 121,
            //     "The Return of the King": 122
            // },
            // tmdbCollectionIds: {
            //     "The Hobbit Series": 121938,
            //     "The Lord of the Rings Series": 119
            // }
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
    }, 
    methods: {
        getTmdbMovieId(name) {
            return this.$store.state.tmdbMovieIds[name] || null;
        },
        getTmdbCollectionId(name) {
            return this.$store.state.tmdbCollectionIds[name] || null;
        }
    }
}
</script>