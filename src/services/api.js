import axios from 'axios';

const api = axios.create({

 // baseURL: 'http://allbertinhoback.herokuapp.com/',
 //  baseURL: 'http://localhost:3030', //colocar a porta usada no de vcs
  baseURL: 'http://localhost:3333',

});

export default api;
