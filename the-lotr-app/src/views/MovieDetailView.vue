<template>
    <div>
        <router-link :to="{name: 'movie'}">Back to Movies</router-link>
        <MovieDetail />
        <MoviePoster />
    </div>
</template>

<script>
import MovieDetail from '../components/MovieDetails.vue';
import MoviePoster from '../components/MoviePoster.vue';
export default {
    components: {
        MovieDetail,
        MoviePoster
    }
}
</script>