import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
}

function fetchList(first, page) {
    return axios.get(`${config.baseUrl}/${first}/${page}.json`)
}
function fetchUserInfo(id) {
    return axios.get(`${config.baseUrl}/user/${id}.json`)
}
function fetchItem(id) {
    return axios.get(`${config.baseUrl}/item/${id}.json`)
}

export {
    fetchList,
    fetchUserInfo,
    fetchItem,
}