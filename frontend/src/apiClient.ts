import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/',
  headers: {
    'Content-type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem('userInfo'))
      config.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem('userInfo')!).token
      }`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)


export default apiClient;
