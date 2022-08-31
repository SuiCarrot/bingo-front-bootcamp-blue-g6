import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

// http://localhost:3333 -- localhost
// Deploy Render -- https://capivara-bingo.onrender.com

export default api;