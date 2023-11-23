import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

 
const supportsConcurrentMode = ReactDOM.createRoot !== undefined;


const root = supportsConcurrentMode
  ? ReactDOM.createRoot(rootElement)
  : ReactDOM.unstable_createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
