import { delay, http, HttpResponse } from "msw";
import moviesJson from "./movies.json";

export const handlers = [
  http.get("/recommendations", async () => {
    await delay(1000);
    return HttpResponse.json(moviesJson);
  }),

  http.post("/recommendations/:movieId", async () => {
    await delay(1000);
    return new HttpResponse(undefined, { status: 200 });
  }),
];
