import React from 'react';
import { IMG_URL } from './Constant';

const MovieCard = ({ poster }) => {
  if(!poster){
    return null;
  }
  return (
    <div className="pr-4 w-36 md:w-48">
      <img src={IMG_URL + poster} className=" w-[500px] " alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
