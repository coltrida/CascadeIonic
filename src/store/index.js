import { createStore } from 'vuex'
import axios from "axios";

const state = {
    users: [],
    albums: [],
    artists: [],
    recentlyAlbumsAdded: [],
    albumWithSongs: [],
    playSongBool: false,
    player:[]
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

    getAlbumWithSongs(state){
        return state.albumWithSongs;
    },

    getPlaySongBool(state){
        return state.playSongBool;
    },

    getPathPlaySong(state){
        return state.pathPlaySong;
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

    async fetchAlbumWithSongs({commit}, idAlbum){
        const response = await axios.get('https://www.ca-scade.com/api/albumWithSongs/'+idAlbum);
        commit('fetchAlbumWithSongs', response.data);
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

    fetchAlbumWithSongs(state, payload){
        state.albumWithSongs = payload;
    },

    playSongMutation(state, path){

        if (state.playSongBool === false){
            state.player = new Audio;
            state.playSongBool = true;
        }
        state.player.src = path;
        state.player.play();
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})