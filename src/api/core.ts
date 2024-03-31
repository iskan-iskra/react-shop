import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com/'

const HttpClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
})

export default HttpClient