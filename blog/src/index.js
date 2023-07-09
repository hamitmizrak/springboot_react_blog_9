import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterBlog from './RouterBlog';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterBlog />
  </React.StrictMode>
);


reportWebVitals();
