import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.242:3000', // substitua pela URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
