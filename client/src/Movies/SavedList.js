import React from 'react';
import {NavLink, Link, useRouteMatch} from "react-router-dom";

const SavedList = props => {
  const {url} = useRouteMatch();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`${url}movies/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  )
};

export default SavedList;
