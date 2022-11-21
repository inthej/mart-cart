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
      <nav id="navbar">
        <ul className="navbar_menu">
          <li className="navbar_menu_item">홈플러스</li>
          <li className="navbar_menu_item">이마트</li>
          <li className="navbar_menu_item">롯데마트</li>
        </ul>
      </nav>
      <main id="main">
        <section id="emart">홈플러스</section>
        <section id="emart">이마트</section>
        <section id="lottemart">LotteMart</section>
      </main>
      <aside id="aside">베너</aside>
      <footer id="footer">Footer</footer>
    </div>
  );
}

export default App;
