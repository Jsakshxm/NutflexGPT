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
      <img src={bg} alt="" className="fixed inset-0 object-cover h-full bg-repeat-y -z-10 opacity-95 md:h-auto" />

      {/* Black Gradient Background */}
      <div className="fixed inset-0 z-0 " />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="text-center">
        <h1 className="md:pt-[700px] pt-[650px] text-5xl sm:text-6xl md:text-6xl font-bold text-white">{lang[CurrentLanguage].title}</h1>
<h2 className="p-4 text-lg font-medium text-white sm:p-6 sm:text-2xl lg:text-3xl">{lang[CurrentLanguage].watch}</h2>
<p className="text-lg font-light text-white sm:text-2xl lg:text-3xl m">{lang[CurrentLanguage].membership}</p>

          <GptSearchBar />
        </div>
      </div>

      {/* Movie List Section */}
      <div className="absolute z-10 w-full max-w-screen-lg mx-auto">
  <GPTMovies />
</div>

    </div>
  );
};

export default GptSearch

