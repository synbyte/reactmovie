import React, { useState } from 'react'
import MovieCard from './MovieCard.jsx'
const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15de90c28e3dea43848688ba2f7c8374&query=${query}&include_adult=false&language=en-US&page=1`);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <>
    <div className='flex justify-center py-5 mx-auto mb-3 bg-gray-800 shadow-lg shadow-violet-500'>
      <div className='align-top bg-violet-700 rounded-full'>
        <input className='mx-5 my-1 text-center rounded-full' type="text" value={query} onChange={(e) => setQuery(e.target.value)}
        />
      <button className='px-3 py-2 bg-violet-800 rounded-full' onClick={searchMovie}>Search</button>
      </div>
      
    </div>
    <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        
    {movies.map(movie => (
  <MovieCard key={movie.id} movie={movie}/>
    ))}
  </ul>
  </>
  )
}

export default MovieSearch;