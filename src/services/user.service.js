import { authHeader } from '../helpers';
import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    let bearer =  authHeader();

    return axios.post(`${baseUrl}/users/authenticate`, { username, password},{
        headers: {
            bearer
        }
    })
        .then(response => {
            debugger
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data));

            return response;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    let bearer =  authHeader();

    return axios.get(`${baseUrl}/users`,{
        headers: {
            bearer
        }
    })
        .then(handleResponse);
}

function getById(id) {
    let bearer =  authHeader();

    return axios.get(`${baseUrl}/users/${id}`, {
        headers: {
            bearer
        }
    })
        .then(handleResponse);
}

function register(user) {
    let bearer =  authHeader();

    return axios.post(`${baseUrl}/users/register`, user,{
        headers: {
            bearer
        }
    })
        .then(handleResponse);
}

function update(user) {
    let bearer =  authHeader();

    return axios.put(`${baseUrl}/users/${user.id}`, user, {
        headers: {
            bearer
        }
    })
        .then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    let bearer =  authHeader();

    return axios.delete(`${baseUrl}/users/${id}`,{
        headers: {
            bearer
        }
    })
        .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload()
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}