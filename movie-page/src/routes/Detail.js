import { useParams } from "react-router-dom/";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>{movies.title}</h1>;
}

export default Detail;
