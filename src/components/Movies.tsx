import { useGetMovies } from "../hooks/MoviesHooks";
import { Loading } from "./Loading";
import { MoviesViewer } from "./MoviesViewer";

export const Movies = () => {
  const { data, isLoading, isFetching } = useGetMovies();

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (!data) {
    return <div>No movies to show</div>;
  }

  return <MoviesViewer movies={data} />;
};
