import React from 'react';
import { IMG_URL } from './Constant';

const MovieCard = ({ poster }) => {
  return (
    <div className='flex flex-wrap p-1'>
      <img src={IMG_URL + poster} className="object-cover w-72" alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
