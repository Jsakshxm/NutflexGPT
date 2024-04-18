"use client"
import React, { useState, useEffect } from 'react';
import lang from './languageConstant';
import { useSelector } from 'react-redux'
import genAI from '../utils/gemini';

const GptSearchBar = () => {
  const CurrentLang = useSelector(state => state.lang.lang);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added state for loading indicator
  const [response, setResponse] = useState(null); // Added state for response
  const [error, setError] = useState(null); // Added state for error


  async function run() {
    setIsLoading(true); // Set loading indicator to true
    setError(null); // Clear any previous errors

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(prompt);
      const generatedText = await result.text();
      setResponse(generatedText);
    } catch (err) {
      console.error('Error generating content:', err);
      setError('An error occurred. Please try again later.'); // Set user-friendly error message
    } finally {
      setIsLoading(false); // Set loading indicator to false after processing finishes
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
          value={prompt} // Added value attribute and connected it to 'prompt' state
          onChange={e => setPrompt(e.target.value)} // Added onChange handler to update 'prompt' state
        />
        <button type='submit' className='col-span-3 m-4 bg-red-600 rounded-md'>
          {lang[CurrentLang].search}
        </button>
      </form>
      {isLoading && <p>Loading...</p>}  {/* Display loading message during generation */}
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      {response && <p>{response}</p>} {/* Display generated response if available */}
    </div>
  );
};

export default GptSearchBar;
