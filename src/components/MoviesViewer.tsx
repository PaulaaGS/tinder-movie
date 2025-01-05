import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { Movie } from "../models/MovieModel";
import { MovieCard } from "./MovieCard";
import { SwipeableCard } from "./SwipeableCard";

interface MoviesViewerProps {
  movies: Movie[];
}

export const MoviesViewer: FC<MoviesViewerProps> = ({ movies }) => {
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

  const [movieIndex, setMovieIndex] = useState(movies.length - 1);

  const handleClick = (movieId: string, accepted: boolean) => {
    if (isPending) {
      return;
    }

    mutate(
      {
        movieId,
        accepted,
      },
      { onSuccess: () => setMovieIndex(movieIndex - 1) }
    );
  };

  if (movieIndex < 0) {
    return <div>No movies to show</div>;
  }

  return movies.map(
    (movie, index) =>
      movieIndex === index && (
        <SwipeableCard
          key={movie.id}
          onSwipeLeft={() => handleClick(movie.id, false)}
          onSwipeRight={() => handleClick(movie.id, true)}
        >
          <MovieCard
            movie={movie}
            onClick={(accepted) => handleClick(movie.id, accepted)}
            isPending={isPending}
          />
        </SwipeableCard>
      )
  );
};
