import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UseSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { addNowPlayingMovies } from "./movieSlice"
import { URL_Movies_NP } from "../components/Constant"
import { options } from "../components/Constant"





const useNowPlayingMovies = () => {
  const NowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const dispatch=useDispatch()
    const router=useRouter()
    

  const getMovies=async()=>{
    const req= await fetch(URL_Movies_NP,options)
    const json=await req.json()
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }
useEffect(()=>{
  if(!NowPlayingMovies) getMovies()
},[])
}

export default useNowPlayingMovies