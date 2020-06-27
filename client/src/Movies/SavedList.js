import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

const SavedList = props => {
  const {url} = useRouteMatch();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`${url}movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  )
};

export default SavedList;
