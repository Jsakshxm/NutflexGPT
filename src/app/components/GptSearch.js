import React from 'react';
import Header from './Header';
import { bg } from './Constant';
import GptSearchBar from './GptSearchBar';
import { useSelector, UseSelector } from 'react-redux';
import lang from './languageConstant';

const GptSearch = () => {
  const CurrentLanguage = useSelector(state=>state.lang.lang)
  return (
    <div className="relative">
      {/* Black Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-transparent">
      {/* Background Image */}
      <img src={bg} alt="" className="absolute inset-0 z-0 object-cover opacity-95" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="pt-[700px] text-5xl font-bold text-white">{lang[CurrentLanguage].title}</h1>
          <h2 className="p-6 text-2xl font-medium text-white">{lang[CurrentLanguage].watch}</h2>
          <p className="text-2xl font-light text-white m">{lang[CurrentLanguage].membership}</p>
<GptSearchBar/>
        </div>
      </div>
    </div> </div>
  );
};

export default GptSearch;
