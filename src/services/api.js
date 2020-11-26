import axios from 'axios';

const api = axios.create({
  baseURL: 'http://allbertinho.herokuapp.com/', //colocar a porta usada no de vcs
});

export default api;
