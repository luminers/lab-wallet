import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://criptoya.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCriptos() {
    return apiClient.get("/dolar");
  },
};
