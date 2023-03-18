import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AuthProvider from './components/providers/AuthProvider';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { GlobalProvider } from './components/providers/GlobalProvider';
import { DropDownDisplayProvider } from './components/providers/DropDownDisplayProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <GlobalProvider>
          <DropDownDisplayProvider>
            <App />
          </DropDownDisplayProvider>
        </GlobalProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

