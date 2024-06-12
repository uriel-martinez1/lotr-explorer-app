<template>
    <div>
        <h1>This is the details from The Movie DB</h1>
    </div>
</template>

<script>
import MovieService from '../services/MovieDBService'

export default {
    data() {
        return {
            movie: {},
        }
    },
    created() {
        MovieService.getMovieDetails
    }
}
</script>