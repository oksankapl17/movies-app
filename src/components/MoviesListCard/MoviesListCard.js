import React from "react";
import {StarsRating} from "../StarsRating/StarsRating";
import classes from './MoviesListCard.module.scss';

const MoviesListCard = ({movie}) => {
  const {poster_path, original_title, overview, rating, release_date, genres, vote_average} = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
      <li className={classes.moviesListCard + " shadow p-3 mb-5 bg-body rounded"}>
        <img src={posterUrl} className={classes.avatar} alt="avatar for this movie"/>
        <div className="p-3">
          <h4 className="mb-3">{original_title}</h4>
          <div>{genres.map(g => <span className="badge bg-secondary mr-2 mb-2 mx-1" key={g}>{g}</span>)}</div>
          <div>{overview}</div>
          <div>{rating}</div>
          <div>{release_date}</div>
          <StarsRating rating={vote_average} />
        </div>
      </li>

  )
}

export default MoviesListCard;
