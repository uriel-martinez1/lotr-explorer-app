import {createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            tmdbMovieIds: {
                "The Unexpected Journey": 49051,
                "The Desolation of Smaug": 57158,
                "The Battle of the Five Armies": 122917,
                "The Fellowship of the Ring": 120,
                "The Two Towers": 121,
                "The Return of the King": 122
            },
            tmdbCollectionIds: {
                "The Hobbit Series": 121938,
                "The Lord of the Rings Series": 119
            },
            tmdbTVIds: {
                "The Lord of the Rings: The Rings of Power": 84773
            }
        },
        mutations: {},

    })
}