import axios from "axios";
const API = {
    login: (data) => {
        return axios.post('/api/users/login', data)
    },
    signUp: (data) => {
        return axios.post('/api/users', data)
    }
}

export default API;