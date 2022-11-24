import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header id="header">
        <div className="header__logo">
          <FontAwesomeIcon icon={faCartShopping}/> 마트카트
        </div>
        <div className="header__caption">대형마트 가격비교 사이트</div>
        {/* Menu */}
        <div className="searchbar">
          <input type="text" placeholder="상품명" id="searchbar__search-input"/>
          <button id="searchbar__search-btn">검색</button>
          <button id="searchbar__init-btn">카트비우기</button>
        </div>
      </header>
      {/* Body */}
      <main id="main">
        <div className="sidebar">
          <aside id="banners">
            <img src="./img/banner_sample.jpg" height="60" />
            <img src="./img/banner_sample.jpg" height="60" />
          </aside>

          <p>방문자수: 999,999</p>
        </div>
        <div className="content">
          <section id="content__homplus">
            <header><h3>홈플러스</h3></header>
          </section>
          <section id="content__emart">
            <header><h3>이마트</h3></header>
            <div id="product-items">
              
            </div>
          </section>
          <section id="content__lottemart">
            <header><h3>롯데마트</h3></header>
            <div id="product-items">
              
            </div>
          </section>
        </div>
        {/* <section id="content">
            <h3>Content section</h3>
        </section> */}
      </main>
        
      {/* <!-- Footer Section --> */}
      <footer id="footer">Footer Section</footer>
    </div>
  )
}

export default App
