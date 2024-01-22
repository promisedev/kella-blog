import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kella.netlify.app/.netlify/functions/api/dashboard",
  withCredentials: true,
});

export default Axios;
