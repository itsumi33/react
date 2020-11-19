import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './asset/css/reset.css'
import './asset/css/iconfont.css'

// HashRouter ->hash模式   BrowserRouter-history模式
import { HashRouter } from 'react-router-dom'
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

