<template>
    <div>
        <router-link :to="{ name: 'character' }">Back to Character List</router-link>
    </div>

    <div class="character-details">
        <h1>{{ character.name || "Unknown Name" }}</h1>
        <CharacterDetails :characterId="characterId" />
    </div>

    <div class="navigation-links">
        <router-link class="link" v-if="previousCharacter"
            :to="{ name: 'characterDetailView', params: { characterId: previousCharacter._id } }">Previous Character</router-link>
        <router-link class="link" v-if="nextCharacter"
            :to="{ name: 'characterDetailView', params: { characterId: nextCharacter._id } }">Next Character</router-link>
    </div>
</template>

<script>
import CharacterDetails from '../components/CharacterDetails.vue';
import lotrService from '@/services/LotrService';

export default {
    components: {
        CharacterDetails
    },
    data() {
        return {
            characters: [],
            characterId: this.$route.params.characterId,
        };
    },
    computed: {
        character() {
            return this.characters.find(character => character._id === this.characterId) || {};
        },
        currentIndex() {
            return this.characters.findIndex(character => character._id === this.characterId);
        },
        previousCharacter() {
            return this.currentIndex > 0 ? this.characters[this.currentIndex - 1] : null;
        },
        nextCharacter() {
            return this.currentIndex < this.characters.length - 1 ? this.characters[this.currentIndex + 1] : null;
        },
    },
    created() {
        this.fetchCharacters();
    },
    methods: {
        fetchCharacters() {
            lotrService.getCharacters()
                .then(response => {
                    this.characters = response.data.docs;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    watch: {
        '$route.params.characterId': function (newCharacterId) {
            this.characterId = newCharacterId;
        }
    }

};
</script>

<style scoped>
.link {
    padding: 10px 20px;
    border: 2px solid hsla(160, 100%, 37%, 1);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
}

.navigation-links {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 20px;
}

.character-details {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px;
}

.character-details h1 {
    color: white;
}
</style>