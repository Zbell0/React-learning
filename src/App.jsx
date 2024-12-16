import { func } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    ).json();

    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.poster_path}
              style={{ width: "200px", height: "auto" }}
            ></img>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
