"use client"
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
  const NowPlaying = useSelector(state => state.movies.nowPlayingMovies)
  const TopRated = useSelector(state => state.movies.topRatedMovies)
  const Popular = useSelector(state => state.movies.popularMovies)
  return (
    <div className='absolute z-10 w-screen pt-32 bg-black md:pt-0'>
    <div className='-mt-48 '><MovieList title={"Now Playing"} movies={NowPlaying} />

    <MovieList title={"Top Rated"} movies={TopRated} />
    <MovieList title={"Popular Movies"} movies={Popular} />


    </div> /</div>
  )
}
