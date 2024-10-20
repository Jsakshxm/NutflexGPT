import React from "react";
import Link from "next/link";
import FlipWords from "./components/Flipwords";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {/* Hero Section */}
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-6 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 animate-pulse">
          NutFlex GPT
        </h1>
        <p className="mb-8 text-3xl font-medium text-gray-300">
          Your next movie is just a recommendation away
        </p>

        {/* FlipWords Component */}
        <div className="mb-12">
          <FlipWords
            words={["Personalized", "Accurate", "Intelligent"]}
            className="text-4xl font-semibold text-red-500"
          />
        </div>

        {/* Call-to-Action */}
        <Link href="/browse">
          <button className="px-12 py-4 text-lg font-semibold text-black transition-transform duration-300 transform rounded-full bg-gradient-to-r from-red-600 to-purple-600 hover:scale-110 focus:ring-4 focus:ring-red-300">
            Start Browsing
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 gap-8 px-4 mt-12 lg:grid-cols-3">
        <div className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-red-600">AI-Powered</h2>
          <p className="text-gray-400">
            Get personalized movie recommendations powered by state-of-the-art AI.
          </p>
        </div>
        <div className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-red-600">Real-Time Updates</h2>
          <p className="text-gray-400">
            Receive the latest movie updates and trends in real-time.
          </p>
        </div>
        <div className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105">
          <h2 className="mb-4 text-2xl font-bold text-red-600">Curated Collections</h2>
          <p className="text-gray-400">
            Explore carefully curated movie collections based on your preferences.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute text-sm text-gray-500 opacity-75 bottom-4">
        © 2024 NutFlex GPT. All rights reserved.
      </footer>
    </div>
  );
}
