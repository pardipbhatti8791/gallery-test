import axios from "axios";

const service = axios.create({
  baseURL: "https://gallery-test.gpcoders.dev",
  withCredentials: true,
});

export default service;
