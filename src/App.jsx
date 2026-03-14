import React, { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favouriteReducer, initialState } from './reducers/favouriteReducer';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import { LoadingSpinner, ErrorMessage } from './components/StatusIndicators';

/**
 * App: The root component of the Photo Gallery.
 */
function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [favourites, dispatch] = useReducer(favouriteReducer, initialState, (initial) => {
    const saved = localStorage.getItem('celebrare_favourites');
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem('celebrare_favourites', JSON.stringify(favourites));
  }, [favourites]);

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo => 
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [photos, searchQuery]);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const toggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans selection:bg-blue-500/30">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={handleSearchChange} 
      />
      
      {/* Primary Content Area */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-6 pt-24 pb-20">

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <PhotoGrid 
            photos={filteredPhotos} 
            favourites={favourites}
            toggleFavourite={toggleFavourite}
          />
        )}
      </main>
    </div>
  );
}

export default App;
