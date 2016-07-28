import axios from 'axios';
import store from 'store';

export function getUsers() {
    return axios.get('http://localhost:3000/users').then(function(response) {

        store.dispatch({
            type: 'GET_USERS',
            users: response.data
        })

        return response;

    }).catch(function(err) {
        console.error(err);
    });
}
