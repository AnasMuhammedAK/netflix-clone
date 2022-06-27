import axios from 'axios';
import {base_url} from './Constance/Constance'

const instance = axios.create({
    baseURL: base_url,
   
  });
  export default instance