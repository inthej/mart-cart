import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStore } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      {/* Header */}
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
      {/* Navbar */}
      <nav id="navbar">
        <div className="navbar__banner">
          <ul className="navbar__banner__list">
            <li className="navbar__banner__list__item">베너1</li>
            <li className="navbar__banner__list__item">베너2</li>
          </ul>
        </div>
        <div className="navbar__author">만든이</div>
      </nav>
      {/* Main */}
      <main id="main">
        <section className="main__homeplus">
          <header className="main__homeplus-header">홈플러스</header>
          <div className="main__homeplus-content">내용</div>
        </section>
        <section className="main__emart">
          <header className="main__emart-header">이마트</header>
          <div className="main__emart-content">내용</div>
        </section>
        <section className="main__lottemart">
          <header className="main__lottemart-header">롯데마트</header>
          <div className="main__lottemart-content">내용</div>
        </section>
      </main>
      {/* Footer */}
      <footer id="footer">Footer</footer>
    </div>
  );
}

export default App;
