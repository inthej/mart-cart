import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header id="header">
          <div className="header__logo">
            <FontAwesomeIcon icon={faCartShopping}/> 마트카트
          </div>
          <div className="header__caption">대형마트 가격비교 사이트</div>
      </header>
        
      {/* Menu */}
      <div className="searchbar">
        <input type="text" placeholder="상품명" id="searchbar__search-input"/>
        <button id="searchbar__search-btn">검색</button>
        <button id="searchbar__init-btn">초기화</button>
      </div>
        
      {/* Body */}
      <main className="main">
        <section id="banners">
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
          <img src="./img/banner_sample.jpg" height="60" width="250" />
        </section>
        <div id="content">
          <section id="content__homplus">
            홈플러스
          </section>
          <section id="content__emart">
            이마트
          </section>
          <section id="content__lottemart">
            롯데마트
          </section>
        </div>
        {/* <section id="content">
            <h3>Content section</h3>
        </section> */}
      </main>
        
      {/* <!-- Footer Section --> */}
      {/* <footer className="footer">Footer Section</footer> */}
    </div>
  )
}

export default App
