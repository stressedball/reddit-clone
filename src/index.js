import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import AuthProvider from './components/providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>
);

