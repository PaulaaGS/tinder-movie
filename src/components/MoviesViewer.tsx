import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Movie } from "../models/MovieModel";
import { MovieCard } from "./MovieCard";

export const MoviesViewer = () => {
  const { data, isLoading, isFetching } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5173/api/movies");
      return await response.json();
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (params: { movieId: string; accepted: boolean }) => {
      const { movieId, accepted } = params;
      return fetch(`http://localhost:5173/api/movies/${movieId}`, {
        method: "POST",
        body: JSON.stringify({ accepted }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

  const [movieIndex, setMovieIndex] = useState(0);

  const handleClick = (accepted: boolean) => {
    if (!data) {
      return;
    }

    mutate(
      {
        movieId: data[movieIndex].id.toString(),
        accepted,
      },
      { onSuccess: () => setMovieIndex(movieIndex + 1) }
    );
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (!data || movieIndex >= data.length) {
    return <div>No movies to show</div>;
  }

  return (
    <div>
      <MovieCard
        movie={data[movieIndex]}
        onClick={handleClick}
        isPending={isPending}
      />
    </div>
  );
};
