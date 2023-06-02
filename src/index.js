import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoryProvider } from './contexts/searchCategories';
import { SearchProvider } from './contexts/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </CategoryProvider>
  </React.StrictMode>
);
