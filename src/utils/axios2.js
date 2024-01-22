import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kella.netlify.app/.netlify/functions/api",
  withCredentials: true,
});

export default Axios;
