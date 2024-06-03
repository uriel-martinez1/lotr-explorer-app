<template>
    <div>
        <input v-model="searchQuery" placeholder="Search Character" class="search-bar" />
        <div class="scrollable-container">
            <div v-for="(group, letter) in filteredCharacterGroups" :key="letter" class="character-group">
                <h2 class="letter-header">{{ letter }}</h2>
                <div v-for="character in group" :key="character._id" class="character-item">
                    <router-link class="character-link"
                        :to="{ name: 'characterDetailView', params: { characterId: character._id } }">
                        {{ character.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';

export default {
    data() {
        return {
            characters: [],
            searchQuery: ''
        };
    },
    computed: {
        sortedCharacters() {
            return this.characters.slice().sort((a, b) => a.name.localeCompare(b.name));
        },
        characterGroups() {
            return this.sortedCharacters.reduce((groups, character) => {
                const firstLetter = character.name.charAt(0).toUpperCase();
                if (!groups[firstLetter]) {
                    groups[firstLetter] = [];
                }
                groups[firstLetter].push(character);
                return groups;
            }, {});
        },
        filteredCharacterGroups() {
            if (!this.searchQuery) {
                return this.characterGroups;
            }
            const filteredCharacters = this.sortedCharacters.filter(character =>
                character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            return filteredCharacters.reduce((groups, character) => {
                const firstLetter = character.name.charAt(0).toUpperCase();
                if (!groups[firstLetter]) {
                    groups[firstLetter] = [];
                }
                groups[firstLetter].push(character);
                return groups;
            }, {});
        }
    },
    created() {
        this.getCharacters();
    },
    methods: {
        getCharacters() {
            lotrService.getCharacters()
                .then(response => {
                    this.characters = response.data.docs;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>

<style scoped>
.search-bar {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    box-sizing: border-box;
}

.scrollable-container {
    max-height: 80vh;
    overflow-y: auto;
    padding-right: 15px;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.character-group {
    margin-bottom: 10px;
}

.letter-header {
    margin: 0;
    padding: 10px 10px 10px 8px;
    border-bottom: 5px solid rgb(255, 255, 255);
    color: white;
    font-weight: bold;
    
}

.character-item {
    display: block;
    margin-top: 10px;
    cursor: pointer;
}

.character-link {
    display: block;
    margin-top: 5px;
}

</style>