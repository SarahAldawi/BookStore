import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

export type Article = {
  books: string;
  image: string;
};


export const searchByTitle = async (title) => {
  const response = await apiClient.get(`/search.json?title=${title}`);
  return response.data;
};