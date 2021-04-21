import React from "react";

export const MoviePage = ({
                            name,
                            poster_path,
                            production_companies,
                            budget,
                            spoken_languages,
                            status,
                            popularity,
                          }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      {poster_path}
      <div>{production_companies}</div>
      <div>{budget}</div>
      <div>{spoken_languages}</div>
      <div>{status}</div>
      <div>{popularity}</div>
    </div>
  );
}
