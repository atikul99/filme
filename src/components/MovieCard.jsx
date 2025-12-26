import React from 'react'
import MovieList from './MovieList'

function MovieCard({data, img}) {
  return (
    <>
        <h2 className='bg-zinc-200 p-4 mb-10 text-3xl font-bold border-l-8 border-blue-500 mt-20 shadow-lg shadow-black rounded'>Populer Movies</h2>
        <MovieList data={data} img={img}/>
    </>
  )
}

export default MovieCard
