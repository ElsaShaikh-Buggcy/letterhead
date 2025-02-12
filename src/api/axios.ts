import axios from "axios";
import { BASE_URL } from "./config/apiConfig";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosWithCredentials = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
