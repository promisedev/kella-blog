import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5001/api/v1/dashboard",
  withCredentials: true,
});

export default Axios;
