import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as MoviesHooks from "../hooks/MoviesHooks";
import { Movie } from "../models/MovieModel";
import { MoviesViewer } from "./MoviesViewer";

const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Movie 1",
    summary: "Description 1",
    rating: 4.5,
    imageURL: "url1",
  },
  {
    id: "2",
    title: "Movie 2",
    summary: "Description 2",
    rating: 4.0,
    imageURL: "url2",
  },
];

vi.mock("./SwipeableCard", () => ({
  SwipeableCard: ({
    children,
    onSwipeLeft,
  }: {
    children: React.ReactNode;
    onSwipeLeft: () => void;
  }) => (
    <div>
      {children}
      <button onClick={onSwipeLeft}>Swipe Left</button>
    </div>
  ),
}));

describe("MoviesViewer", () => {
  it("should render the first movie", () => {
    vi.spyOn(MoviesHooks, "useMutateMovie").mockReturnValue({
      mutate: vi.fn(),
      isPending: false,
    });

    render(<MoviesViewer movies={mockMovies} />);

    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });

  it("should call mutate function with accepted false on swipe left", () => {
    const mutateMock = vi.fn();
    vi.spyOn(MoviesHooks, "useMutateMovie").mockReturnValue({
      mutate: mutateMock,
      isPending: false,
    });

    render(<MoviesViewer movies={mockMovies} />);

    fireEvent.click(screen.getByText("Swipe Left"));

    expect(mutateMock).toHaveBeenCalledWith(
      { movieId: "2", accepted: false },
      expect.any(Object)
    );
  });

  it("should call mutate function with accepted false on reject click", () => {
    const mutateMock = vi.fn();
    vi.spyOn(MoviesHooks, "useMutateMovie").mockReturnValue({
      mutate: mutateMock,
      isPending: false,
    });

    render(<MoviesViewer movies={mockMovies} />);

    fireEvent.click(screen.getByText("Reject"));

    expect(mutateMock).toHaveBeenCalledWith(
      { movieId: "2", accepted: false },
      expect.any(Object)
    );
  });

  it("should call mutate function with accepted true on accept click", () => {
    const mutateMock = vi.fn();
    vi.spyOn(MoviesHooks, "useMutateMovie").mockReturnValue({
      mutate: mutateMock,
      isPending: false,
    });

    render(<MoviesViewer movies={mockMovies} />);

    fireEvent.click(screen.getByText("Accept"));

    expect(mutateMock).toHaveBeenCalledWith(
      { movieId: "2", accepted: true },
      expect.any(Object)
    );
  });
});
