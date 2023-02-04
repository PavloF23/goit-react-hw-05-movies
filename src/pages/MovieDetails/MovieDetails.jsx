import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, Suspense } from "react";
import { useMount } from 'react-use';
import { AiFillCaretLeft } from "react-icons/ai";
import { Main, ButtonBack, FilmInfo, Title, Description, List, LinkBtn } from './MovieDetails.styled'
import { getMoviesID } from "../../components/servisApi";
import defaultPicture from '../../images/default-movie.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();  
  const [filmId, setFilmId] = useState('');
  const [genre, setGenre] = useState([]);
  const [date, setDate] = useState('');
  const [loc, setLoc] = useState('');
   
  useMount(() => {
    async function getFilm() {
      try {
        const filmInfo = await getMoviesID(movieId)
        const genres = []
        filmInfo.data.genres.map(genre => genres.push(' ' + genre.name))
        
        if (!filmInfo.data) {
          throw new Error("Sory, no result!")
        }
          
        setFilmId(filmInfo.data)
        setGenre(genres.toString().split('').slice(1).join(''))
        setDate(filmInfo.data.release_date.split('-')[0])
          
      } catch (error) {
        console.log(error);
      }
    }
    
    setLoc(location.state?.from ?? "/")
    getFilm()    
    })

  return (
    <Main>
      <ButtonBack to={loc}>
        <AiFillCaretLeft />
        <p>Come Back</p>
      </ButtonBack>
      {filmId && <FilmInfo>
        <img
            width={250} 
            src={filmId.poster_path
                    ? `https://image.tmdb.org/t/p/w500${filmId.poster_path}`
                    :  defaultPicture}
            alt={filmId.name}
          />
        <div>
          <h2>{filmId.original_title} ({date})</h2>
          <Title>Overview</Title>
          <Description>{filmId.overview}</Description>
          <Title>Genres</Title>
          <Description>{ genre }</Description>
        </div>
      </FilmInfo>}
      <div>
        <p>Additional information</p>
        <List>
          <li>
            <LinkBtn to='cast' filmid={movieId}>Cast</LinkBtn>
          </li>
          <li>
            <LinkBtn to="reviews" filmid={movieId}>Reviews</LinkBtn>
          </li>
        </List>
      </div>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </Main>
  );
};

export default MovieDetails;