import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useMount } from 'react-use';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchFilms } from "../components/servisApi";
import Loader from '../components/Loader';
import  MovieList  from "../components/MovieList/MovieList";
import Form from "components/Form/Form";

const Movies = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchFilm = searchParams.get("query") ?? '';
  const [searchFilms, setSearchFilms] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  const handlSubmit = (query) => {
    // const nextParams = query !== "" ? { query } : {};
    // setSearchParams(nextParams)
    setSearchFilms(query)
    setError('')
  }
  
  // useMount(() => {
  //   async function getFilm() {
  //     try {
  //       const searchInfo = await getSearchFilms(searchFilm)
          
  //       if (searchInfo.data.results.length !== 0) {
  //         setItems(searchInfo.data.results)
  //         setIsLoadings(false) 
  //         return 
  //       }

  //       setIsLoadings(false)
  //       throw new Error("Sory, no result!");
  //     } catch (error) {
  //       setIsLoadings(false)
  //       console.log(error);
  //     }
  //   }

  //   if (searchFilm) {
  //     setIsLoadings(true)
  //     getFilm()
  //   }
  // })
    
  useEffect(() => {
    async function getFilm() {
      try {
        const searchInfo = await getSearchFilms(searchFilms)
        
        if (searchInfo.data.results.length !== 0) {
          setItems(searchInfo.data.results)
          setIsLoadings(false)
          return 
        }

        setIsLoadings(false)
        setItems([])
        throw new Error("Sory, no result!");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setItems([])
        console.log(error);
      }
    }

    if (searchFilms==='') {
      return
    }

    setIsLoadings(true)
    getFilm()      
  }, [searchFilms])

  return (
    <main>
      <Form onSubmit={handlSubmit}></Form>
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
      {error && <h2>{error.message}</h2>}
      <MovieList items={items}></MovieList>
    </main>
  );
}

export default Movies;
