import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const productDataList = [
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
  { imgUrl: './img/product_sample.jpg', name: '오리온 고래밥 볶은약념 160G', price: 1000, unit: '10g', unitPrice: 175, },
]

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
            <div className="product-list">
              {
                productDataList.map(product => (
                  <div className="product-list-item">
                    <div className="product-item-img-wrap">
                      <img src={product.imgUrl} id="product-img" width="100px" />
                    </div>
                    <div className="product-item-info">
                      <span>{product.name}</span>
                    </div>
                    <div className="product-item-price-cart-wrap">
                      <div className="product-item-price-wrap">
                        <div className='product-item-price-wrap-price'>
                          <strong>{product.price}</strong>원
                        </div>
                        <div className='product-item-price-wrap-unit'>
                          <span>{product.unit}:{product.unitPrice}원</span>
                        </div>
                      </div>
                      <div className="product-item-cart-wrap">
                        <div className="product-item-cart-wrap-inner">
                          <button>-</button>
                          <input type="text" value="1" id="cartCounter"/>
                          <button>+</button>
                        </div>
                        <button>카트담기</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
          <section id="content__emart">
            <header><h3>이마트</h3></header>
            <div className="product-list">
              {
                productDataList.map(product => (
                  <div className="product-list-item">
                    <div className="product-item-img-wrap">
                      <img src={product.imgUrl} id="product-img" width="100px" />
                    </div>
                    <div className="product-item-info">
                      <span>{product.name}</span>
                    </div>
                    <div className="product-item-price-cart-wrap">
                      <div className="product-item-price-wrap">
                        <div className='product-item-price-wrap-price'>
                          <strong>{product.price}</strong>원
                        </div>
                        <div className='product-item-price-wrap-unit'>
                          <span>{product.unit}:{product.unitPrice}원</span>
                        </div>
                      </div>
                      <div className="product-item-cart-wrap">
                        <div className="product-item-cart-wrap-inner">
                          <button>-</button>
                          <input type="text" value="1" id="cartCounter"/>
                          <button>+</button>
                        </div>
                        <button>카트담기</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
          <section id="content__lottemart">
            <header><h3>롯데마트</h3></header>
            <div className="product-list">
              {
                productDataList.map(product => (
                  <div className="product-list-item">
                    <div className="product-item-img-wrap">
                      <img src={product.imgUrl} id="product-img" width="100px" />
                    </div>
                    <div className="product-item-info">
                      <span>{product.name}</span>
                    </div>
                    <div className="product-item-price-cart-wrap">
                      <div className="product-item-price-wrap">
                        <div className='product-item-price-wrap-price'>
                          <strong>{product.price}</strong>원
                        </div>
                        <div className='product-item-price-wrap-unit'>
                          <span>{product.unit}:{product.unitPrice}원</span>
                        </div>
                      </div>
                      <div className="product-item-cart-wrap">
                        <div className="product-item-cart-wrap-inner">
                          <button>-</button>
                          <input type="text" value="1" id="cartCounter"/>
                          <button>+</button>
                        </div>
                        <button>카트담기</button>
                      </div>
                    </div>
                  </div>
                ))
              }
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
