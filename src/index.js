import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //'App.js'의 마지막 부분 'export default App'을 통해 'App.js'를 내보냈고, 그 'App.js'를 여기서 임포트해 사용함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
