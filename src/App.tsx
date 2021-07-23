import React from "react";

import "./App.css";
import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookList
        books={[{ title: "My first book" }, { title: "My second book" }]}
      />
    </>
  );
}

export default App;
