import { delay, http, HttpResponse } from "msw";
import moviesJson from "./movies.json";

export const handlers = [
  http.get("/api/movies", async () => {
    await delay(1000);
    return HttpResponse.json(moviesJson);
  }),

  http.post("/api/movies/:movieId", async () => {
    await delay(1000);
    return new HttpResponse(undefined, { status: 200 });
  }),
];
