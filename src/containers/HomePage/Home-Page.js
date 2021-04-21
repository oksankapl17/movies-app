import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movies";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = (props) => {
  const { movies, getMovies } = props;
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="Page">
      <MoviesList moviesList={movies} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state?.movies?.list,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
