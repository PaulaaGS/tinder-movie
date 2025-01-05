import { useQuery } from "@tanstack/react-query";
import { Movie } from "../models/MovieModel";
import { MoviesViewer } from "./MoviesViewer";
import { Loading } from "./Loading";

export const Movies = () => {
  const { data, isLoading, isFetching } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("/api/movies");
      return await response.json();
    },
  });

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (!data) {
    return <div>No movies to show</div>;
  }

  return <MoviesViewer movies={data} />;
};
