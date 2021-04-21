import React from "react";

const MoviePage = (props) => {

  return (
    <div className="container">
      <h1>{name}</h1>
      {/*<img src="" alt=""/> */ poster_path}
      <div>{production_companies}</div>
      <div>{budget}</div>
      <div>{spoken_languages}</div>
      <div>{status}</div>
      <div>{popularity}</div>

    </div>

  );

  export default MoviePage
