import {http, HttpResponse} from 'msw'
import moviesJson from './movies.json'

export const handlers = [
    http.get('http://localhost:5173/api/movies', () => {
        return HttpResponse.json(moviesJson)
    }),
]