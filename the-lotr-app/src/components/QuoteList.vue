<template>
    <div>
        <div class="quote-content">
            <div v-for="quote in quotes" v-bind:key="quote._id" class="quote-container">
                <p>"{{ quote.dialog }}"</p>
                <router-link class="character-link"
                    v-bind:to="{ name: 'characterDetailView', params: { characterId: quote.character } }">
                    {{ getCharacterName(quote.character) }}
                </router-link>
                <br>
            </div>
        </div>

        <div class="pagination-controls">
            <button @click="fetchQuotes(1)" :disabled="currentPage === 1">First</button>
            <button @click="fetchQuotes(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
            <button @click="fetchQuotes(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
            <button @click="fetchQuotes(totalPages)" :disabled="currentPage === totalPages">Last</button>
        </div>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';

export default {
    data() {
        return {
            quotes: [],
            characters: [],
            currentPage: 1,
            totalPages: 1
        };
    },
    created() {
        this.getCharacters();
        this.fetchQuotes(this.currentPage);
    },
    methods: {
        getCharacterName(characterId) {
            const character = this.characters.find(character => character._id === characterId);
            return character ? character.name : 'Unknown Character';
        },
        getCharacters() {
            lotrService.getCharacters()
                .then(response => {
                    this.characters = response.data.docs;
                })
                .catch(error => {
                    console.error(error);
                })
        },
        fetchQuotes(page) {
            lotrService.getQuotes(page)
                .then(response => {
                    this.quotes = response.data.docs;
                    this.currentPage = page;
                    this.totalPages = Math.ceil(response.data.total / 10);
                })
                .catch(error => {
                    console.error(error);
                })
        },
    }
}
</script>

<style scoped>
.quote-content {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    max-width: 800px;
    padding: 20px;
    border-radius: 8px;
    max-height: 80vh;
    overflow-y: auto;
}

.quote-container {
    margin-bottom: 10px;
}

.quote-container p {
    color: white;
}

.character-link {
    display: block;
    margin-top: 5px;
}

.pagination-controls {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.pagination-controls button {
    margin: 0 5px;
}
</style>