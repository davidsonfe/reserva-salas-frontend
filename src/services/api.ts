import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.106.2.62:3000', // substitua pela URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
