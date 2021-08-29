import axios from "axios";

const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL_PROD,
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default service;
