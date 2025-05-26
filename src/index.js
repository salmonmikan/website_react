import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Main from './Pages/Main';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>
);
