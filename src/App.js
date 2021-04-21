import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./containers/HomePage/Home-Page";
import axios from "axios";
import { MoviePage } from "./containers/MoviePage/MoviePage";
import { Header } from "./components/Header/Header";

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_ACCESS_TOKEN}`;

function DummyComponent() {
  return <h2>Dummy Component here!</h2>;
}

function NotFound() {
  return (
    <div className="container">
      <h2 className="text-center my-5">Page Not Found!</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/movie">
            <DummyComponent />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route
            path="/movie/:id"
            render={(routeProps) => <MoviePage {...routeProps} />}
          />
          <Route
            path="/not-found"
            render={(routeProps) => <NotFound {...routeProps} />}
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
