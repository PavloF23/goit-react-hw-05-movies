import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import defaultPicture from '../../images/default-movie.jpg';
import { List, Item, LinkItem, Poster, MovieTitle } from './MovieList.styled';

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <List>{items.map(({ id, poster_path, title }) => (
      <Item key={id}>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Poster src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultPicture} alt={title} />
        <MovieTitle>{title}</MovieTitle>
      </LinkItem>
    </Item>
  ))} </List>
);
};

MovieList.propTypes = {
  items:  PropTypes.arrayOf(
          PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
  })),
}

export default MovieList;