import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="header__logo">
          <FontAwesomeIcon icon={faStore} />
          현마트
        </div>
        <div className="header__searchbar">
          <input type="text" name="searchbar" id="searchbar" />
          <button>검색</button>
        </div>
      </header>
      <main id="main">
        <div className="main__content">
          <section id="homeplus">HomePlus</section>
          <section id="emart">Emart</section>
          <section id="lottemart">LotteMart</section>
        </div>
        <div id="main__banner">Banner</div>
      </main>
      <footer id="footer">Footer</footer>
    </div>
  );
}

export default App;
