import React from 'react';
import PhotoCard from './PhotoCard';

/**
 * PhotoGrid: Container that handles the responsive layout logic.
 * Displays a 3-column grid on large screens for a more cinematic feel.
 */
const PhotoGrid = ({ photos, favourites, toggleFavourite }) => {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] py-20 text-center animate-reveal">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-apple-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Search Result Empty</h3>
        <p className="text-apple-gray mt-2 max-w-xs mx-auto text-sm">We couldn't find any curators matching that specific criteria in our current collection.</p>
        <button className="mt-8 text-blue-500 font-semibold text-sm hover:underline">View all collections</button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {photos.map((photo, index) => (
        <div key={photo.id} style={{ animationDelay: `${index * 50}ms` }}>
            <PhotoCard
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              toggleFavourite={toggleFavourite}
            />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
