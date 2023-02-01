import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, Item, Poster, MovieInfo } from './MovieList.styled';
import defaultPicture from '../../images/default-movie.jpg';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <Item to={`/movies/${item.id}`} state={{ from: location }}>
            <Poster
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : defaultPicture
              }
              alt={item.title}
            />
            <MovieInfo>
              <p>{item.title}</p>
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