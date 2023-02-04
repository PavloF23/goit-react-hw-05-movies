import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';
import { List, Character } from './Cast.styled';
import { getActors } from "../../components/servisApi";
import Loader from '../Loader'

const Cast = () => {
  const { movieId } = useParams();
  const [filmActors, setFilmActors] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  useMount(() => {
    async function getFilm() {
      try {
        const searchActors = await getActors(movieId)
        
        if (searchActors.data.cast.length !== 0) {
          setFilmActors(searchActors.data.cast)
          setIsLoadings(false)
          return 
         }
        setIsLoadings(false)
        setFilmActors([])
        throw new Error("Sory, no result!");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setFilmActors([])
        console.log(error);
      }
    }

    setIsLoadings(true)
    getFilm()      
  })
  return (
    <section>
      {isLoading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {filmActors.length !== 0 && <List>
        {filmActors.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            width={100} 
            src={profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://www.meme-arsenal.com/memes/fefac21eda463aa9a307c7cfdbea1bee.jpg`
                }
            alt={name}
          />
          <p>{name}</p>
          <Character>Character: {character}</Character>
        </li>
        ))}
      </List>}
    </section>
  );
};

export default Cast;