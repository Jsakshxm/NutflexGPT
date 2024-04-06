import { options } from "../components/Constant"
import { URL_TopRated } from "../components/Constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "./movieSlice"

const useTopRated = () => {
    const dispatch=useDispatch()
    const getMovies=async()=>{
        const req= await fetch(URL_TopRated,options)
        const json=await req.json()
        console.log(json)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getMovies()
    },[])
}

export default useTopRated