import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const formatCurrency = (number) => {
  return number.toLocaleString("en-US", {
    style: "decimal",
  });
};

function MovieCard({ movie, showLink = true }) {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2> {movie.title} </h2>
      <p>
        <FaStar /> {movie.vote_average}
        /10
      </p>
      <small>Avaliações : {formatCurrency(movie.vote_count)}mil</small>

      {showLink && <Link to={`/movie${movie.id}`}>Detalhes</Link>}
    </div>
  );
}

export default MovieCard;
