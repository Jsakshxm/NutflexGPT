"use client"
import React, { useState } from 'react';
import lang from './languageConstant';
import { useSelector } from 'react-redux';
import genAI from '../utils/gemini';

const GptSearchBar = () => {
  const CurrentLang = useSelector(state => state.lang.lang);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(''); // Initialize response as a string
  const [error, setError] = useState(null);

  async function run() {
    setIsLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent("Act as a movie recommendation system and suggest some movies for the query :"+prompt+"only give me the names of 5 movies, coma separated like the example given ahead . Example:Golmaal,Dhoom3,3 idiots, sholay ,housefull3 ");
      // Convert the response object to a string before setting the state
      const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      setResponse(text);
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
      {/* Render the response as text */}
      {response && <p>{response}</p>}
    </div>
  );
};

export default GptSearchBar;
