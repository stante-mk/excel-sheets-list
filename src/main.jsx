import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

Office.onReady().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
});
