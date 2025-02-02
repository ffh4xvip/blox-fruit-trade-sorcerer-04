import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to initialize the React app
function initializeReactApp() {
  const container = document.getElementById('blx-calculator-root');
  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}

// Check if we're in WordPress environment
if (window.wpData) {
  // WordPress environment - wait for DOM content to be loaded
  document.addEventListener('DOMContentLoaded', initializeReactApp);
} else {
  // Standard environment - initialize immediately
  initializeReactApp();
}