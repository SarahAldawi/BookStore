// src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://openlibrary.org",
  headers: {
    "Content-Type": "application/json",
    },
});

export default apiClient;
