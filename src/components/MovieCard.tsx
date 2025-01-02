import { Movie } from "../models/MovieModel";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({
  movie: { title, rating, imageURL, summary },
}: MovieCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Rating: {rating}/10</p>
      <img src={imageURL} alt={title} />
      <div>{summary}</div>
      <div>
        <button>Accept</button>
        <button>Reject</button>
      </div>
    </div>
  );
};
