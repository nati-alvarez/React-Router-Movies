import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import { useParams } from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const {id} = useParams();
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  },[id]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div onClick={saveMovie} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
