import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({ title, movies }) => {
  console.log(movies);
  
  // Check if movies is null or undefined
  if (!movies) {
    return <div>No movies to display</div>;
  }

  return (
    <div className='text-white bg-black'>
     
     <h1 className="py-4 text-lg md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
        {movies.map(movie => (
          <MovieCard key={movie.id} poster={movie.poster_path} className="" />
        ))}
      </div> </div>
    </div>
  );
};

export default MovieList;
