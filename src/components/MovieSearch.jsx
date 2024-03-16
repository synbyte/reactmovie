import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard.jsx'
const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [header, setHeader] = useState('Trending Movies & Series');

  const searchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=15de90c28e3dea43848688ba2f7c8374&query=${query}&include_adult=false&language=en-US&page=1`);
    const data = await response.json();
    setMovies(data.results);
    setHeader(`Search results for "${query}"`);
  }

  const orTrending = async () => {
    
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWRlOTBjMjhlM2RlYTQzODQ4Njg4YmEyZjdjODM3NCIsInN1YiI6IjY1ZTY4MGY0MWRiNjVkMDE4NzkyZGFiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.125zacHZ-DTivPZLb94AWsSJP0NbMgKlGK88ZGVu9BE'
      }
    };
    const response = await fetch(url,options);
    const data = await response.json();
    setMovies(data.results);
  
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovie();
    }
  }
  
  useEffect(() => {
    orTrending();
  }, []);
  

  return (
    <>
      <div className='flex justify-center py-5 mx-auto mb-3 bg-gray-800 shadow-md shadow-violet-800'>
        <div className='align-top bg-violet-700 rounded-full transition hover:shadow-md hover:shadow-violet-500'>
          <input onKeyDown={handleKeyPress} className='mx-5 my-1 text-center rounded-full keania-one-regular' type="text" value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button className='px-3 py-2 bg-violet-800 rounded-full transition hover:scale-110 hover:shadow-lg shadow-black hover:bg-violet-500 keania-one-regular' onClick={searchMovie}>Search</button>
        </div>

      </div>
      <p className='text-3xl keania-one-regular'>{header}</p>
      <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  )
}

export default MovieSearch;
