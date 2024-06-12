<template>
    <div>
        <router-link :to="{name: 'movie'}">Back to Movies</router-link>
        <MovieDetail />
        
    </div>
</template>

<script>
import MovieDetail from '../components/MovieDetails.vue';
export default {
    components: {
        MovieDetail,
    }
}
</script>