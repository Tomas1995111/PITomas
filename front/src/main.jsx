import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importa Provider desde 'react-redux'
import store from './redux/store'; // Importa tu store
import App from './App.jsx';
import './index.css';

// Importa createRoot desde "react-dom/client"
import { createRoot } from 'react-dom/client';

// Utiliza createRoot en lugar de ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve tu aplicación con el Provider y pasa el store */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);