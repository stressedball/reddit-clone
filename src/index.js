import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/index-dark-mode.css';
import App from './components/App';
import AuthProvider from './components/providers/AuthProvider';
import { ThemeProvider } from './components/providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

