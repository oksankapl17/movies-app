import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import HomePage from "./containers/HomePage/Home-Page";
import axios from 'axios';
import MoviePage from "./containers/MoviePage/MoviePage";
import {Header} from "./components/Header/Header";

axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTI0YjcyYjk2NDdmMmJjYzE4YWYzMDBkMjVhMzcxYyIsInN1YiI6IjVlMDI1OTk4MjZkYWMxMDAxNzY3ZGM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTN7Kedufy2A5uc2QDsYMW9oMsLz9ufpYGB_J0pExlQ`;

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/movie">
            <DummyComponent/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route
            path="/movie/:id"
            render={(routeProps) => <MoviePage {...routeProps} />}
          />
          <Redirect
            from="*"
            to={{
              pathname: "/not-found",
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

function DummyComponent() {
  return <h2>Dummy Component here!</h2>;
}

function NotFound() {
  return <h2>Page Not Found!</h2>;
}
