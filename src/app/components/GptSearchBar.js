"use client"
import React, { useState } from 'react';
import lang from './languageConstant';
import { useSelector } from 'react-redux';
import { options } from './Constant';
import genAI from '../utils/gemini';

const GptSearchBar = () => {
  const CurrentLang = useSelector(state => state.lang.lang);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const getmovies = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", options);
    const json = await data.json();
    return json.results;
  };

  const clearFocus = () => {
    setResponse(null);
  };

  async function run() {
    setIsLoading(true);
    setError(null);
  
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent("Act as a movie recommendation system and suggest some movies for the query: " + prompt + ". Only give me the names of 5 movies, comma-separated, like the example given ahead. Example: Golmaal, Dhoom3, 3 idiots, Sholay, Housefull3");
  
      const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      setResponse(text);
  
      if (text) {
        const movies = text.split(",");
        const PromiseArray = movies.map((movie) => getmovies(movie));
        const tmdbResults = await Promise.all(PromiseArray);
        console.log(tmdbResults);
      }
    } catch (err) {
      console.error('Error generating content:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    run();
  };

  return (
    <div className='text-white bg-black'>
      <form onSubmit={handleSubmit} className='grid grid-cols-12'>
        <input
          type='text'
          className='col-span-9 px-4 py-3 m-4 text-black focus:outline-orange-500'
          onFocus={clearFocus}
          placeholder={lang[CurrentLang].GptSearchPlaceholder}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button type='submit' className='col-span-3 m-4 bg-red-600 rounded-md'>
          {lang[CurrentLang].search}
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {response && <p>{response}</p>}
    </div>
  );
};

export default GptSearchBar;
