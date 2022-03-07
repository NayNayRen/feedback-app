import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App is used from /src App.js component

// App is used using XML
// StrictMode offers more checks and warnings
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
