import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Books from "./screens/books";
import Book from "./screens/book";
import Playground from "./screens/Playground";
import Counter from "./screens/Counter";

function App() {
  return (
    <>
      <nav>
        <NavLink exact strict activeClassName="activeLink" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="activeLink" to="/playground">
          Playground
        </NavLink>
        <NavLink activeClassName="activeLink" to="/counter">
          Counter
        </NavLink>
        <NavLink activeClassName="activeLink" to="/books">
          Books
        </NavLink>
      </nav>
      <Switch>
        <Redirect exact from="/" to="/books" />
        <Route path="/playground">
          <Playground />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/books/:isbn">
          <Book />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </>
  );
}

export default App;
