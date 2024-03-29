import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { URL_Movies_NP } from '../components/Constant'
import { options } from '../components/Constant'
import Header from '../components/Header'
import profile from '../components/Constant'

const Browse = () => {
    const dispatch=useDispatch()
    const router=useRouter()
    const handleclick=()=>{
        signOut(auth).then(() => {
            router.push("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  router.push("/error")
});
    }

  const getMovies=async()=>{
    const req= await fetch(URL_Movies_NP,options)
    const json=await req.json()
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }
useEffect(()=>{
  getMovies()
},[])

  return (
    <div className="flex flex-col">
    <Header />
    <div className="z-30 flex items-center justify-end p-4 py-6 space-x-4">
      <img
        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        alt="Sign Out"
        className="w-12 h-12 rounded-sm"
      />
      <button className="px-2 py-2 font-semibold text-white bg-red-500 " onClick={handleclick}>
        Sign Out
      </button>
    </div>
  </div>
  )
}

export default Browse