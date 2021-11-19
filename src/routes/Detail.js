import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import styles from './Detail.module.css';
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description_full}</p>
          <img src={movie.large_cover_image} alt="" />
        </div>
      )}
    </div>
  );
}

export default Detail;
