import React, { memo } from 'react';

/**
 * PhotoCard: Individual image card with interactive elements.
 * Uses React.memo for performance optimization to skip unnecessary re-renders.
 */
const PhotoCard = memo(({ photo, isFavourite, toggleFavourite }) => {
  return (
    <div className="group relative glass-light rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.03] flex flex-col h-full animate-reveal">
      {/* Image Container with Hover Zoom */}
      <div className="aspect-[1/1] overflow-hidden relative">
        <img
          src={`https://picsum.photos/id/${photo.id}/500/500`}
          alt={`Photograph by ${photo.author}`}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Heart Toggle Overlay */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={() => toggleFavourite(photo.id)}
            className={`p-3 rounded-full backdrop-blur-lg border border-white/20 transition-all active:scale-95 ${isFavourite ? 'bg-red-500 text-white' : 'bg-black/30 text-white hover:bg-black/50'} shadow-lg`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill={isFavourite ? "currentColor" : "none"}
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Metadata Overlay - Transparent Gradient Finish */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 group-hover:from-transparent group-hover:bg-transparent">
          <div className="flex items-center gap-3">
            {/* Signature Vertical Line */}
            <div className="w-[3px] h-3.5 bg-blue-500 rounded-full transition-all duration-500 group-hover:opacity-0"></div>
            
            <h3 className="text-xs font-bold text-white tracking-wide truncate w-full drop-shadow-md">
              {photo.author}
            </h3>
          </div>
        </div>

        {/* Hover Gradient Overlay (Subtle) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
});

export default PhotoCard;
