import axios from "axios";

const instance = axios.create({
  baseURL: "...", //The API (cloud funcion) url
});

export default instance;
