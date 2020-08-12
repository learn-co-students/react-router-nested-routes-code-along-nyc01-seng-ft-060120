import React from 'react';
 
const MovieShow = ({match, movies}) => { //match in args allows us to access path info in routerprops passed from moviespage
 
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>{/* access the movieId stored in match.params to render info about selected movie*/}
    </div>
  );
}
 
export default MovieShow;