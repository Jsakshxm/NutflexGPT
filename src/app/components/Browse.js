"use client"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGpt } from '../utils/gptSlice';
import Header from '../components/Header';
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import useTopRated from '../utils/useTopRated';
import usePopularMovies from '../utils/usePopularMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import GptSearch from './GptSearch';
import lang from './languageConstant';
import { SUPPORTED_LANG } from './languageConstant';
import { ChangeLang } from '../utils/langSlice';
const Browse = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const showGpt = useSelector(state => state.gpt.showGpt);
  const lang=useSelector(state=>state.lang.lang)

  // Fetch movies hooks
  useNowPlayingMovies();
  useTopRated();
  usePopularMovies();

  const handleGptToggle = () => {
    dispatch(toggleGpt());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        router.push("/error");
      });
  };


  const handleChangeLanguage=(e)=>{
    dispatch(ChangeLang(e.target.value))
  }

  return (
    <>
      <div className="flex flex-col bg-black">
      

        <Header />
        <div className="z-30 flex items-center justify-center p-4 py-6 pt-24 space-x-4 md:justify-end md:pt-4">
          <button className='px-2 py-3 text-white bg-orange-500 rounded-md text-md' onClick={handleGptToggle}>
            {showGpt ? "GPT Search"  :  "Browse Movies"}
          </button>
          {
            !showGpt && <select name="" id="" className='p-3 rounded-md' onChange={handleChangeLanguage} >{SUPPORTED_LANG.map((lang)=>
              <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
            )} </select>
          }
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="Sign Out"
            className="hidden w-12 h-12 rounded-sm md:inline-block"
          />
          <button className="px-2 py-2 font-semibold text-white bg-red-500" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      {showGpt ?<> 
      <MainContainer />
      <SecondaryContainer /> </> : <div className=' bg-gradient-to-b from-black'><GptSearch>  /</GptSearch>  </div>  }
      
    </>
  );
};

export default Browse;
