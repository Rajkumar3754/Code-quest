import React from 'react';
import { useSelector } from 'react-redux';
import { getallMovies } from '../../Features/movies/movieSlice';
import MovieCards from '../MovieCards/MovieCards';
import './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getallMovies);

  // Conditionally render movies or error message
  const renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCards key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
