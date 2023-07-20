import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://backend-api.lndo.site/', // Replace this with your API base URL
});

export default apiInstance;