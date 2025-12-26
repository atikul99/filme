import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'


const IMG_PATH = "https://image.tmdb.org/t/p/w1280/"

function Header() {

    const [movies, setMovies] = useState([]);

    const [input, setInput] = useState("");

    async function MoviesApp() {
        try {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`;
            const data = await fetch(url);
            const result = await data.json();

            setMovies(result.results);

            //console.log(result)
        } catch (error) {
            console.log(error);
        }
    }

    // Search

    async function SearchMovie() {
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${input}`;
            const data = await fetch(url);
            const result = await data.json();

            setMovies(result.results);

            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        if( input !== "" ){
            SearchMovie();
        }else{
            MoviesApp();
        }
    }, [input] )

  return (
    <>
        <header>
            <div className='bg-blue-600 py-3 shadow-white mb-12 rounded'>
                <div className='px-4 flex items-center justify-between'>
                    <h2 className='text-2xl text-white font-bold'>Filme</h2>
                    <div className='w-1/2'>
                        <form action="">
                            <input
                                type="text"
                                className='px-5 py-3 border rounded text-gray-900 w-full outline-none bg-white'
                                placeholder='Search movie here'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </header>
        <MovieCard data={movies} img={IMG_PATH}/>
    </>
  )
}

export default Header
