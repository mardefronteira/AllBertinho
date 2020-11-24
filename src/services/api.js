import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3033', //colocar a porta usada no de vcs
});

export default api;
