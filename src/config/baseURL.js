import axios from "axios";

export const api = axios.create({
  baseURL: "https://restaurant-api.dicoding.dev",
});
