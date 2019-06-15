import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const Movies = (props) => {
const movieWorld = props.movies
const rn=()=>{
    return Math.floor(Math.random() * 1000 + 1);
 }
return(movieWorld?(
  <ul className="movies">
    {props.movies.map(movie => (
      <li key={rn()}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
):"")};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default Movies;