import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});


const token = localStorage.getItem("token");
http.defaults.headers.common["Authorization"]=`Bearer ${token}`
export default http