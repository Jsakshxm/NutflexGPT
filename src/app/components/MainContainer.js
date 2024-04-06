import React from 'react';
import { useSelector } from 'react-redux';
import VideoTittle from './VideoTittle';
import VideoBg from './VideoBg';

export const MainContainer = () => {
  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return <div>Loading...</div>; // Handle the case when movies array is empty
  }

  const mainMovie = nowPlayingMovies[0];

  // Check for missing data before using them
  const { original_title = "", overview = "", backdrop_path,id } = mainMovie || {}; 

  return (
    <div>
    <VideoBg img={backdrop_path} id={id} />
      <VideoTittle title={original_title} description={overview} />
      
    </div>
  );
};
