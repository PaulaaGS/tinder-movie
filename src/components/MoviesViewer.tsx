import { useQuery } from "@tanstack/react-query";
import { MovieCard } from "./MovieCard";
import { Movie } from "../models/MovieModel";

export const MoviesViewer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5173/api/movies");
      return await response.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((movie: Movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
