import React from "react";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import classes from "./MoviesList.module.scss";

const MoviesList = ({ moviesList }) => {
  return (
    <ul className={classes.moviesList}>
      {moviesList.map((movie) => (
        <MoviesListCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
export default MoviesList;
