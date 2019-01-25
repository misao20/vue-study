import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

function fetchNewsList(page) {
    return axios.get(`${config.baseUrl}/news/${page}.json`)
}
function fetchJobsList(page) {
    return axios.get(`${config.baseUrl}/jobs/${page}.json`)
}
function fetchAskList(page) {
    return axios.get(`${config.baseUrl}/ask/${page}.json`)
}
function fetchUserInfo(id) {
    return axios.get(`${config.baseUrl}/user/${id}.json`)
}
function fetchItem(id) {
    return axios.get(`${config.baseUrl}/item/${id}.json`)
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItem,
}