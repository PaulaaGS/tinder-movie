import { useMutation, useQuery } from "@tanstack/react-query";
import { Movie } from "../models/MovieModel";

export const useGetMovies = () => {
  const { data, isLoading, isFetching } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("/api/movies");
      return await response.json();
    },
  });

  return { data, isLoading, isFetching };
};

export const useMutateMovie = () => {
  const { mutate, isPending } = useMutation({
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

  return { mutate, isPending };
};
