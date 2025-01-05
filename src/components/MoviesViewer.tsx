import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Movie } from "../models/MovieModel";
import { MovieCard } from "./MovieCard";

interface MoviesViewerProps {
  movies: Movie[];
}

export const MoviesViewer: FC<MoviesViewerProps> = ({ movies }) => {
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
    mutate(
      {
        movieId: movies[movieIndex].id.toString(),
        accepted,
      },
      { onSuccess: () => setMovieIndex(movieIndex + 1) }
    );
  };

  if (movieIndex >= movies.length) {
    return <div>No movies to show</div>;
  }

  return (
    <div>
      <MovieCard
        movie={movies[movieIndex]}
        onClick={handleClick}
        isPending={isPending}
      />
    </div>
  );
};
