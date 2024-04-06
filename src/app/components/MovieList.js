import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);
  
  // Check if movies is null or undefined
  if (!movies) {
    return <div>No movies to display</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className='flex overflow-x-scroll'>
        {movies.map(movie => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
