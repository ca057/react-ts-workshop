import React from "react";

import "./App.css";
import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
    </>
  );
}

export default App;
