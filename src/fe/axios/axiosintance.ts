import axios from "axios";
import { config } from "../../../config";



const apiURL = config.gateway.apiURL;
const axiosFeInstance = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: "application/json",
  },
});



export default axiosFeInstance;
