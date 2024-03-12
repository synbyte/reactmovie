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
    <div className='my-5'>
      <input className='mx-5' type="text" value={query} onChange={(e) => setQuery(e.target.value)}
        />
      <button className='px-3 bg-violet-700 rounded-md' onClick={searchMovie}>Search</button>
      <ul className='grid grid-cols-2'>
        
        {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
    </div>
  )
}

export default MovieSearch;