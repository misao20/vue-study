/* eslint-disable no-console */
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
                // console.log(...response.data);
            })
            .catch((error) => console.error(error))
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => commit('SET_JOBS', data))
            .catch(error => console.error(error));
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => commit('SET_ASK', data))
            .catch(error => console.error(error))
    },
    FETCH_USER({ commit }, id) {
        fetchUserInfo(id)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.error(error))
    },
    FETCH_ITEM({ commit }, id) {
        fetchItem(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(error => console.error(error))
    },
}