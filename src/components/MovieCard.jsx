import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
 return (
   <><Link to={`/player/${movie.id}`}>
    <div className="text-center justify-center align-middle mx-auto my-5 border p-3 rounded-xl">
    <img className="mx-auto" width={100}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div>{movie.title}</div>
      <div>{movie.id}</div>
      <div>{movie.overview}</div>
    </div>
    </Link>
   </>
 ) 
}
export default MovieCard;