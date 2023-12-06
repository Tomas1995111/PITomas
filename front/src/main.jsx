import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Importa createRoot desde "react-dom/client"
import { createRoot } from 'react-dom/client';

// Utiliza createRoot en lugar de ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);