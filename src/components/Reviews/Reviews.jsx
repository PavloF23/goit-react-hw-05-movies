import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';
import { getReviews } from "../servisApi";
import Loader from '../Loader';
import { Avtor, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  useMount(() => {
    async function getFilm() {
      try {
        const searchReviews = await getReviews(movieId)
        
        if (searchReviews.data.results.length !== 0) {
          setFilmReviews(searchReviews.data.results)
          setIsLoadings(false)
          return 
        }

        setIsLoadings(false)
        setFilmReviews([])
        throw new Error("We don't have any reviews for this movie");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setFilmReviews([])
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
      {filmReviews.length !== 0 &&<List>
        {filmReviews.map((review) => (
        <li key={review.id}>
          <Avtor>Autor: {review.author}</Avtor>
          <p>{review.content}</p>
        </li>
      ))}</List>}
    </section>
  );
};

export default Reviews;