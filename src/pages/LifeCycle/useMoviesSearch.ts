import { useState, useCallback } from 'react';

export const useMoviesSearch = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handleFetch = useCallback(async () => {
    setMovies([]);
    const resp = await fetch(`http://localhost:4000/movies?search=${search}`);
    const data = await resp.json();

    setMovies(data.movies);
  }, [search]);

  return { movies, handleFetch, search, setSearch };
};
