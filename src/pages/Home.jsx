import { useState } from "react";
import { useMount } from 'react-use';
import { getTrendingMovies } from "../components/servisApi";
import  MovieList  from "../components/MovieList/MovieList";

const Home = () => {
  const [items, setItems] = useState([]);

  useMount(() => {
    async function getFilms() {
      try {
        const listFilm = await getTrendingMovies()
        
        if (!listFilm.data.results.length) {
          throw new Error("Sory, try later");
        }
       
        setItems(listFilm.data.results)

      } catch (error) {
        console.log(error);
      }
    }

    getFilms()    
  })

  return (
    <main>
      {items.length && <MovieList items={items}></MovieList>}
    </main>
  );
};

export default Home;