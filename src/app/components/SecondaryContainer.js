"use client"
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
  const NowPlaying = useSelector(state => state.movies.nowPlayingMovies)
  return (
    <div><MovieList title={"Now Playing"} movies={NowPlaying} />
    </div>
  )
}
