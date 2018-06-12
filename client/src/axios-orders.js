import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-4872a.firebaseio.com/'
});

export default instance;