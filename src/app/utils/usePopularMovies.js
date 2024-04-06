import { useEffect } from "react"
import { URL_Popular } from "../components/Constant"
import { options } from "../components/Constant"
import { addPopularMovies } from "./movieSlice"
import { useDispatch } from "react-redux"

const UsePopularMovies = () => {
    const dispatch=useDispatch()
  const getMovies=async()=>{
    const req= await fetch(URL_Popular,options)
    const json=await req.json()
    console.log(json)
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getMovies()
  },[])
}

export default UsePopularMovies