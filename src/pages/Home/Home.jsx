// import { useState, useEffect } from 'react';
// import { getTrendingMovies } from '../../components/servisApi';
// import { MovieList } from 'components/MovieList/MovieList';
// import { Section, Container, Heading } from './Home.styled';
// import { Notification } from '../../components/Notification/Notification';
// import { Loader } from '../../components/Loader';

// const Status = {
//   PENDING: 'pending',
//   REJECTED: 'rejected',
//   RESOLVED: 'resolved',
// };

// export const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState(Status.PENDING);

//   useEffect(() => {
//     getTrendingMovies()
//       .then(({ results }) => {
//         if (!results.length) {
//           setStatus(Status.REJECTED);
//           setError(
//             "Oops, something went wrong... We can't load trending movies 😥"
//           );
//           return;
//         }
//         setMovies(results);
//         setStatus(Status.RESOLVED);
//       })
//       .catch(error => {
//         setError(error);
//         setStatus(Status.REJECTED);
//       });
//   }, []);

//   return (
//     <main>
//       <Section>
//         <Container>
//           <Heading>Trending today</Heading>
//           {status === Status.PENDING && <Loader />}
//           {status === Status.REJECTED && <Notification message={error} />}
//           {status === Status.RESOLVED && <MovieList items={movies} />}
//         </Container>
//       </Section>
//     </main>
//   );
// };

import { useState } from "react";
import { useMount } from 'react-use';
import {  getTrendingMovies } from "../../components/servisApi";
import { MovieList }  from "../../components/MovieList/MovieList";


export const Home = () => {
  const [films, setFilms] = useState([]);

  useMount(() => {
    async function getFilms() {
      try {
        const listFilm = await  getTrendingMovies()        
        if (!listFilm.data.results.length) {
          throw new Error("Sory, try later");
        }       
        setFilms(listFilm.data.results)          
      } catch (error) {
        console.log(error);
      }
    }
    getFilms()    
  })

  return (
    <main>
      {films.length && <MovieList items={films}></MovieList>}
    </main>
  );
};
