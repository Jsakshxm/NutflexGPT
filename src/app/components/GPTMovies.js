"use client"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

export const GPTMovies = () => {
    const GPTMovies=useSelector(state=>state.gpt.GptMov)
    const TMDBmovieResults=useSelector(state =>state.gpt.Results)
  return (
    <div className=" bg-black absolute mt-[690px] w-screen">
    {TMDBmovieResults&&<div className='text-black '>
     {GPTMovies.map((movie,index)=>(<MovieList title={GPTMovies[index]} movies={TMDBmovieResults[index]} key={GPTMovies} />))}
    </div>} </div>
  )
}
