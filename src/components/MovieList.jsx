import React, { useState } from 'react'
import Modal from './Modal';

function MovieList({data, img}) {

    const [selectedMovie, setSelectedMovie] = useState();

    const handleMovieClick = (movies) => {
        setSelectedMovie(movies);
    }

    //console.log(selectedMovie);
    
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
                {data.map( (movies) => {
                    return(
                        <div
                            className="card bg-white border border-gray-200 rounded-lg shadow shadow-white hover:scale-105 overflow-hidden cursor-pointer transition ease-in-out delay-50"
                            key={crypto.randomUUID()}
                            onClick={() => handleMovieClick(movies)}
                        >
                            <img src={`${img + movies.poster_path}`} alt="" />
                            <div className="flex just-between p-4 items-center">
                                <h3 className='font-semibold'>{movies.title}</h3>
                                <p className="bg-orange p-2 rounded">{movies.vote_average}</p>
                            </div>
                        </div>
                    );
                } )}

                {selectedMovie && (<Modal data={selectedMovie} img={img} onClose={ () => setSelectedMovie(null) } />)}
            </div>
        </>
    )
}

export default MovieList
