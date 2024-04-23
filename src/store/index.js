import { createStore } from 'vuex'
import axios from "axios";

const state = {
    users: [],
    albums: [],
    artists: [],
    recentlyAlbumsAdded: [],
}

const getters = {
    getUsers(state){
        return state.users;
    },

    getAlbums(state){
        return state.albums;
    },

    getArtists(state){
        return state.artists;
    },

    getRecentlyAlbumsAdded(state){
        return state.recentlyAlbumsAdded;
    },
}

const actions = {
    async fetchUsers({commit}){
        const response = await axios.get('https://www.ca-scade.com/api/listOfUsers');
        commit('fetchUsers', response.data);
    },

    async fetchAlbums({commit}){
        const response = await axios.get('https://www.ca-scade.com/api/listOfAlbums');
        commit('fetchAlbums', response.data);
    },

    async fetchArtists({commit}){
        const response = await axios.get('https://www.ca-scade.com/api/listOfArtists');
        commit('fetchArtists', response.data);
    },

    async fetchRecentlyAlbumsAdded({commit}){
        const response = await axios.get('https://www.ca-scade.com/api/recentlyAlbumsAdded');
        commit('fetchRecentlyAlbumsAdded', response.data);
    },
}

const mutations = {
    fetchUsers(state, payload){
        state.users = payload;
    },

    fetchAlbums(state, payload){
        state.albums = payload;
    },

    fetchArtists(state, payload){
        state.artists = payload;
    },

    fetchRecentlyAlbumsAdded(state, payload){
        state.recentlyAlbumsAdded = payload;
    },
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})