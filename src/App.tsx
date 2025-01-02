import "./App.css";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <MovieCard
      title="Star Wars: Episode VII - The Force Awakens"
      rating={5}
      img="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
      summary="Lorem ipsum...."
    />
  );
}

export default App;
