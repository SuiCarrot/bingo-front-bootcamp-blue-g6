import axios from 'axios';

const api = axios.create({
    baseURL: 'https://capivara-bingo.onrender.com'
})

// http://localhost:3333 -- localhost

export default api;