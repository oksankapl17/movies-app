import {combineReducers} from "redux";
import moviesReducer from './movies'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  movies: moviesReducer,
})

export default rootReducer
