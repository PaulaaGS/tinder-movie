interface MovieCardProps {
  title: string;
  rating: number;
  img: string;
  summary: string;
}

export const MovieCard = ({ title, rating, img, summary }: MovieCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Rating: {rating}/10</p>
      <img src={img} alt={title}/>
      <div>{summary}</div>
      <div>
        <button>Accept</button>
        <button>Reject</button>
      </div>
    </div>
  );
};
