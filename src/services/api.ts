import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.11.9:3333', // Endereço do meu PC
});

export { api };
