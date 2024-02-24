
import Header from './Header'

import Link from 'next/link'

const Signup = () => {
  return (
    <div><Header></Header><img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    <form action="" className='absolute left-0 right-0 w-3/12 p-12 m-2 mx-auto text-white bg-black top-32 bg-opacity-80'>
    <h1 className='px-2 pb-4 mx-2 text-4xl'>Sign Up</h1>
    <input type="text" placeholder='Full Name' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600'/>
        <input type="text" placeholder='Email' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600'/>
        <input type="password" placeholder='Password' className='h-10 p-4 m-4 w-[15rem] bg-zinc-600'/> <br />
        <button className="w-[15rem] h-12 p-4 m-4 bg-red-600 rounded-sm"> Submit</button>
        <p className='pt-3 m-4 text-zinc-400'>Already Registered?<Link href="/" className='m-2 text-white underline cursor-pointer'>Sign In</Link></p>
    </form></div>
  )
}

export default Signup

