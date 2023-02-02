import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, Item, Poster, MovieInfo } from './MovieList.styled';
import defaultPicture from '../../images/default-movie.jpg';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map((film) => (
        <ListItem key={film.id}>
          <Item to={`/movies/${film.id}`} state={{ from: location }}>
            <Poster
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : defaultPicture
              }
              alt={film.title}
            />
            <MovieInfo>
              <p>{film.title}</p>
            </MovieInfo>
          </Item>
        </ListItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
