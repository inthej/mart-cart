import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import LayoutWithComponent from './layouts/LayoutWithComponent'
import Main from './pages/Main'
import MainLayout from './layouts/MainLayout.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>대형마트 가격비교 - 마트카트</title>
        <meta name="description" content="대형마트 최저가 비교" />
      </Helmet>
      <Routes>
        <Route path="/" element={<LayoutWithComponent layout={MainLayout} component={Main} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
