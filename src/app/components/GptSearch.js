"use client"
import { useSelector } from 'react-redux';
import lang from './languageConstant';
import { bg } from './Constant';
import GptSearchBar from './GptSearchBar';
import { GPTMovies } from './GPTMovies';

const GptSearch = () => {
  const CurrentLanguage = useSelector(state => state.lang.lang);

  return (
    <div className="relative">
      {/* Background Image */}
      <img src={bg} alt="" className="absolute inset-0 z-0 object-cover bg-repeat-y opacity-95" />

      {/* Black Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="pt-[700px] text-5xl font-bold text-white">{lang[CurrentLanguage].title}</h1>
          <h2 className="p-6 text-2xl font-medium text-white">{lang[CurrentLanguage].watch}</h2>
          <p className="text-2xl font-light text-white m">{lang[CurrentLanguage].membership}</p>
          <GptSearchBar />
        </div>
      </div>

      {/* Movie List Section */}
      <div className="absolute z-10">
        <GPTMovies />
      </div>
    </div>
  );
};

export default GptSearch

