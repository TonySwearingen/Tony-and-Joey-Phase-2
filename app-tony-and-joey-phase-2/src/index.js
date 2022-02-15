import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TokenCon from './TokenCon';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TokenCon/>
    <h1>does this work wyh</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
