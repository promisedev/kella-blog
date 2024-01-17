import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5001/api/v1/kella",
  withCredentials: true,
});

export default Axios;
