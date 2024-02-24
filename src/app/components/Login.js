"use client"

import Header from './Header'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link'
import { FormDataValidate } from '../utils/validate'
import { useEffect, useRef, useState } from 'react'
import { auth } from '../utils/firebase';
import { useRouter } from 'next/Navigation';





const Login = () => {
  const email =useRef("");
  const password = useRef("")
  const [Error,SetError]=useState("")
  const [isSignIn,SetisSignIn]=useState(true)
  const name=useRef("")
  const router=useRouter()
  


 

  const handleclick=()=>{
    console.log(email.current.value)
    console.log(password.current.value)

    const message=FormDataValidate(email.current.value,password.current.value)
    SetError(message)


    if (message) return
      
if(!isSignIn){

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetError(errorCode + "-"+errorMessage)
    // ..
  });
    }

    if(isSignIn){

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetError(errorCode + "-"+errorMessage)
  });
    }
  }

  const toggleSignIn=()=>{
    SetisSignIn(!isSignIn)
  }

  return (
    <div><Header></Header><img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    <form action="" onSubmit={(e)=>{e.preventDefault()}} className='absolute left-0 right-0 w-3/12 p-12 m-2 mx-auto text-white bg-black top-32 bg-opacity-80'>
    <h1 className='px-2 pb-4 mx-2 text-4xl'>{isSignIn? "Sign In" :"Sign Up"}</h1>
    {!isSignIn && <input type="text" placeholder='Full Name' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600' ref={name}/>}
    
        <input type="text" placeholder='Email' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600' ref={email}/>
        <input type="password" placeholder='Password' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600' ref={password}/> <br />
        <button className="w-[15rem] h-12 p-4 m-4 bg-red-600 rounded-sm" onClick={handleclick}> Submit</button>
        <p className='px-2 m-2 font-semibold text-red-600'>{Error}</p>
        <p className='pt-3 m-4 cursor-pointer text-zinc-400' onClick={toggleSignIn}>{isSignIn? "New to Netflix?  Sign Up" :"Already Registered? Sign In"}</p>
    </form></div>
  )
}

export default Login