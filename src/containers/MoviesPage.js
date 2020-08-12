// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';
 
const MoviesPage = ({ match, movies }) => ( //match allows you to access path info in routerProps passed from App
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/> {/* router component will render movieshow when movie is selected. added movie info from parent avail through prop. using render=routerprops allows us to pass the route info to the movieshowcomponent*/}
  </div>
)
 
export default MoviesPage
