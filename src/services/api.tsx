import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.26.223:8000/api/v1/'
});

export default api;