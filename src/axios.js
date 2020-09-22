import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e2ff6.cloudfunctions.net/api", //The API (cloud funcion) url
});

export default instance;

//To test: http://localhost:5001/clone-e2ff6/us-central1/api