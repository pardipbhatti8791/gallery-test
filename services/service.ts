import axios from "axios";

const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL_PROD,
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export default service;
