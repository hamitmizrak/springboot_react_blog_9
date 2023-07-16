import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterBlog from './RouterBlog';
import reportWebVitals from './reportWebVitals';

// BrowserRouter, HashRouter(verileri hashleme: backente giden gelen trafiğini gizle)
// BrowserRouter => http://localhost:3000/
// HashRouter    => http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterBlog />
  </BrowserRouter>
);

reportWebVitals();
