import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4";

// アプリの起動時にGA4を初期化
ReactGA.initialize("G-Z5PGMEZJ5J");

// 初期表示時のページビューを送信
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
