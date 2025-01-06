import { useMutation, useQuery } from "@tanstack/react-query";
import { Movie } from "../models/MovieModel";

export const useGetMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("/api/movies");
      return await response.json();
    },
  });
};

export const useMutateMovie = () => {
  return useMutation({
    mutationFn: (params: { movieId: string; accepted: boolean }) => {
      const { movieId, accepted } = params;
      return fetch(`/api/movies/${movieId}`, {
        method: "POST",
        body: JSON.stringify({ accepted }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};
