import {useGetToken} from "../getToken.js"
const axios = require('axios');

export default function() {

    console.log(`Header Token: ${localStorage.getItem('token')}`)

    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    })
}