import axios from 'axios'

const apiGetCall = (url) => {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUyNjViZGQzODU1OWQ4MGYzZDUyY2EiLCJpYXQiOjE2NTkwMDQzNzh9.9enFfUlsO0I4XK34rmjlMME681tyqkFIU5jOqbolcdI',
    }
    return axios.get(url, {
        headers: headers,
    })
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            return error
        });
}


const apiPostCall = async (url, body) => {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        crossorigin: true,
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Origin": "*",
    }
    return axios.post(url, body, {
        headers: headers,
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        });
}

export { apiGetCall, apiPostCall }