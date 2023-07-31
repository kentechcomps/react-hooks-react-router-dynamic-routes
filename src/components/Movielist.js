import React from "react";
import {Link} from "react-router-dom";


function MoviesList({movies}) {
    const renderMovie =Object.keys(movies).map(
        (movieId) =>(
         <li key={movieId}>
      <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
    </li> 
        )
    )
    return <ul>{renderMovie}</ul>

}
export default MoviesList;