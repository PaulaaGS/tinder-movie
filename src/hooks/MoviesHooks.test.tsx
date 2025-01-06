import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetMovies, useMutateMovie } from "./MoviesHooks";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("MoviesHooks", () => {
  describe("useGetMovies", () => {
    it("should return movies", async () => {
      // Arrange
      const movies = [{ id: "1", title: "Movie 1" }];
      vi.spyOn(window, "fetch").mockResolvedValueOnce(
        new Response(JSON.stringify(movies))
      );

      // Act
      const { result } = renderHook(() => useGetMovies(), { wrapper });

      // Assert
      await waitFor(() => {
        expect(result.current.data).toEqual(movies);
      });
    });
  });

  describe("useMutateMovie", () => {
    it("should mutate movie", async () => {
      // Arrange
      vi.spyOn(window, "fetch").mockResolvedValueOnce(
        new Response(JSON.stringify({}))
      );

      const movieId = "1";
      const accepted = true;

      // Act
      const { result } = renderHook(() => useMutateMovie(), { wrapper });
      result.current.mutate({ movieId, accepted });

      // Assert
      await waitFor(() => {
        expect(window.fetch).toHaveBeenCalledWith(`/api/movies/${movieId}`, {
          method: "POST",
          body: JSON.stringify({ accepted }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      });
    });
  });
});
