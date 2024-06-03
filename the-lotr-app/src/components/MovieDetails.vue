<template>
    <h1>{{ movie.name }}</h1>
    <div v-for="detail in movieDetails" v-bind:key="detail.key">
        <p>
            {{ detail.key }}: {{ detail.value }}
        </p>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';

export default {
    data() {
        return {
            movie: {}
        };
    },
    computed: {
        movieDetails() {
            const details = {
                'Runtime': this.movie.runtimeInMinutes,
                'Budget': this.movie.budgetInMillions,
                'Box Office': this.movie.boxOfficeRevenueInMillions,
                'Academy Award Nominations': this.movie.academyAwardNominations,
                'Academy Award': this.movie.academyAwardWins,
                'Rotten Tomatoes Score': this.movie.rottenTomatoesScore,
            };

            return Object.entries(details).map(([key, value]) => ({ 
                key, 
                value: value || 'Unknown'
            }));
        },
    },
    watch: {
        '$route.params.movieId': {
            immediate: true,
            handler(newId) {
                console.log('New movieId:', newId);
                this.getMovieDetails(newId);
            }
        },
    },
    methods: {
        getMovieDetails(id) {
            lotrService.getMovie(id)
                .then(response => {
                    this.movie = response.data.docs[0] || {};
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>