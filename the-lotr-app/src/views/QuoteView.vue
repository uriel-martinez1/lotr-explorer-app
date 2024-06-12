<template>
    <div class="quote-page">
        <h1>Quote List</h1>
        <QuoteList />
    </div>
</template>

<script>
import QuoteList from '../components/QuoteList.vue';

export default {
    components: {
        QuoteList
    }
}
</script>

<style scoped>
.quote-page {
    margin-bottom: 10px;
    max-height: 80vh;
}
</style>