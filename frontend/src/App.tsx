import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} />
      <header>Header</header>
      <main>Content</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
