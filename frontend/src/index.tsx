import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import '98.css/dist/98.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
