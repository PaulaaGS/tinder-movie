import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as MoviesHooks from "../hooks/MoviesHooks";
import { Movie } from "../models/MovieModel";
import { Movies } from "./Movies";

vi.mock("../hooks/MoviesHooks");
vi.mock("./Loading", () => ({
  Loading: () => <div>Loading...</div>,
}));
vi.mock("./MoviesViewer", () => ({
  MoviesViewer: ({ movies }: { movies: Movie[] }) => (
    <div>{movies.length} movies</div>
  ),
}));

describe("Movies component", () => {
  it("should display loading when data is loading", () => {
    vi.spyOn(MoviesHooks, "useGetMovies").mockReturnValue({
      data: undefined,
      isLoading: true,
      isFetching: false,
    });

    render(<Movies />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display loading when data is fetching", () => {
    vi.spyOn(MoviesHooks, "useGetMovies").mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetching: true,
    });

    render(<Movies />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display no movies message when there is no data", () => {
    vi.spyOn(MoviesHooks, "useGetMovies").mockReturnValue({
      data: undefined,
      isLoading: false,
      isFetching: false,
    });

    render(<Movies />);

    expect(screen.getByText("No movies to show")).toBeInTheDocument();
  });

  it("should display movies when data is available", () => {
    const mockData: Movie[] = [
      {
        id: "1",
        title: "Movie 1",
        rating: 5,
        imageURL: "url1",
        summary: "Summary 1",
      },
      {
        id: "2",
        title: "Movie 2",
        rating: 4,
        imageURL: "url2",
        summary: "Summary 2",
      },
    ];

    vi.spyOn(MoviesHooks, "useGetMovies").mockReturnValue({
      data: mockData,
      isLoading: false,
      isFetching: false,
    });

    render(<Movies />);

    expect(screen.getByText("2 movies")).toBeInTheDocument();
  });
});
