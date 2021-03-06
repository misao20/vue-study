/* eslint-disable no-console */
import { fetchUserInfo, fetchItem, fetchList } from '../api/index.js';

export default {
    FETCH_LIST({ commit }, obj) {
            fetchList(obj.first, obj.page)
                .then(({ data }) => {
                    commit('SET_DATA', data);
                    return data;
                })
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