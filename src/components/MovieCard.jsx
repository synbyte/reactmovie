import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
 return (
   
    <Link to={`/player/${movie.id}`}>
    <div className="py-5 mx-5 my-5 h-full text-center"><div className='pt-5 h-full text-black bg-violet-300 rounded-xl border'>
    <img className="mx-auto rounded-full" width={100}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div>{movie.title}</div>
      <div>{movie.id}</div>
      <div>{movie.overview}</div>
      </div></div>
    </Link>
   
 ) 
}
export default MovieCard;