import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch photos from Picsum API
 * Requirements:
 * - Return photos, loading, and error states
 * - Fetch 30 photos from https://picsum.photos/v2/list?limit=30
 */
const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        // Requirement 2 & 6: Fetching from Picsum API
        const response = await fetch('https://picsum.photos/v2/list?limit=30');

        if (!response.ok) {
          throw new Error(`Failed to fetch photos: ${response.statusText}`);
        }

        const data = await response.json();
        setPhotos(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
