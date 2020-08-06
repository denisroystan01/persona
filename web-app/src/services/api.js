import axios from 'axios';

function post(url, data, config) {
    return axios.get('https://reqres.in/api/users?page=2')
}

function get() {
    console.log('Get Func')
}

export default {
    post: post
}