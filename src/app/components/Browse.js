import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/navigation'; // Import router from next/router

import Header from '../components/Header';
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import useTopRated from '../utils/useTopRated';
import usePopularMovies from '../utils/usePopularMovies';

const Browse = () => {
  const router = useRouter(); // Initialize router

  // Fetch now playing movies (assuming this hook is defined correctly)
  useNowPlayingMovies();
  useTopRated();
  usePopularMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/"); // Redirect to home page after sign out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        router.push("/error"); // Redirect to error page if sign out fails
      });
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="z-30 flex items-center justify-end p-4 py-6 space-x-4">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="Sign Out"
          className="w-12 h-12 rounded-sm"
        />
        <button className="px-2 py-2 font-semibold text-white bg-red-500 " onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
