import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MovieCard from "./MovieCard";

const MovieList = props => {
  const {url} = useRouteMatch();
  return (
    <div className="movie-list">
      {props.movies.map(movie => {   
        console.log(movie)
        const { id } = movie;
        return (
          <Link to={`${url}movies/${id}`}>
            <MovieCard key={id} movie={movie} />
          </Link>
        )
      })}
    </div>
  );
}

export default MovieList;
