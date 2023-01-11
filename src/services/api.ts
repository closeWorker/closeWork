import axios from "axios";
export const api = axios.create({
  baseURL: "https://closework.onrender.com",
  timeout: 5000,
});
