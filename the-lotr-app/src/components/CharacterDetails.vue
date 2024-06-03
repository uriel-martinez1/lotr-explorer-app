<template>
    <div>
        <div class="detail-content" v-for="detail in characterDetails" v-bind:key="detail.key">
            <p v-if="detail.key === 'Wiki URL' && detail.value !== 'Unknown'">
               Wiki URL: <a v-bind:href="detail.value" target="_blank">{{ detail.value }}</a>
            </p>
            <p v-else>{{ detail.key }}: {{ detail.value }}</p>
        </div>
    </div>
</template>

<script>
import lotrService from '../services/LotrService';

export default {
    props: {
        characterId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            character: {}
        };
    },
    computed: {
        characterDetails() {
            const details = {
                'Wiki URL': this.character.wikiUrl,
                'Race': this.character.race,
                'Birth': this.character.birth,
                'Gender': this.character.gender,
                'Death': this.character.death,
                'Hair': this.character.hair,
                'Height': this.character.height,
                'Realm': this.character.realm,
                'Spouse': this.character.spouse,  
            };

            return Object.entries(details).map(([key, value]) => ({ 
                key, 
                value: value || 'Unknown'
            }));
        },
    },
    // the watch property is used to watch for changes in the characterId prop
    watch: {
        characterId: {
            // the immediate option is set to true to call the handler function immediately
            immediate: true,
            
            handler(newId) {
                console.log('New characterId:', newId);
                this.getCharacterDetails(newId);
            }
        }
    },
    methods: {
        getCharacterDetails(id) {
            lotrService.getCharacter(id)
            .then(response => {
                this.character = response.data.docs[0] || {};
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>
.detail-content p {
    color: #ffffff;
}
</style>