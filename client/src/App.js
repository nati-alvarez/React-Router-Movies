import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    let alreadyInList = false;
    savedList.forEach(savedMovie=>{
      if(savedMovie.id === movie.id) alreadyInList = true;
    })
    if(!alreadyInList) setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path="/">
          <MovieList movies={movieList}/>
        </Route>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList}/>
        </Route>
      </div>
    </Router>
  );
};

export default App;
