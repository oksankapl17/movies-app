import axios from "axios";

const SAVE_MOVIES = "SAVE_MOVIES";

function saveMovies(data) {
  return {
    type: SAVE_MOVIES,
    payload: data,
  };
}

export const getMovies = () => async (dispatch) => {
  try {
    // const {
    //   data: { results },
    // } = await axios.get("https://api.themoviedb.org/3/discover/movie?page=1");

    const [moviesRes, genresRes] = await Promise.all([
      axios.get("https://api.themoviedb.org/3/discover/movie?page=1"),
      axios.get("https://api.themoviedb.org/3/genre/movie/list"),
    ]);
    const {
      data: { results },
    } = moviesRes;
    const {
      data: { genres },
    } = genresRes;

    const findGenderId = results.find((el) => {
     const genresArray = el.genre_ids.map((id) => {
        const { name } = genres.find((g) => g.id === id);
        return name;
      });
     el.genres = genresArray;
    });

    dispatch(saveMovies(results));
  } catch (e) {
    console.log(e);
  }
};
