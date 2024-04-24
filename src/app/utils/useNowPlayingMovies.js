import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "./firebase"
import { useRouter } from "next/navigation"
import { addNowPlayingMovies } from "./movieSlice"
import { URL_Movies_NP } from "../components/Constant"
import { options } from "../components/Constant"





const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const router=useRouter()
    

  const getMovies=async()=>{
    const req= await fetch(URL_Movies_NP,options)
    const json=await req.json()
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }
useEffect(()=>{
   getMovies()
},[])
}

export default useNowPlayingMovies