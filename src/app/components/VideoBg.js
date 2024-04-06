"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { options } from './Constant';

const VideoBg = ({ img, id }) => {
  const [trailerKey, setTrailerKey] = useState('');

  const getVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const json = await data.json();
    const filterdata = json.results.filter((item) => item.type === 'Trailer');
    const trailer = filterdata[0];
    if (trailer) {
      setTrailerKey(trailer.key);
    }
  };

  useEffect(() => {
    getVideo();
  }, [id]); // Depend on `id` so it fetches new trailer if the `id` prop changes

  // Check if trailerKey is available to avoid rendering an invalid iframe
  if (!trailerKey) return null;

  return (
    <div className=''>
      <iframe 
         className="z-20 w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?mute=1&autoplay=1`} 
        title="YouTube video player" 

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen 
        >
      </iframe>
    </div>
  );
};

export default VideoBg;
