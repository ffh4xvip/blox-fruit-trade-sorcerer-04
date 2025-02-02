import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to initialize the app
const initApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;
  
  // Get base URL from WordPress if available, otherwise use default
  const baseUrl = window.wpData?.baseUrl || window.location.pathname.replace(/\/[^/]*$/, '');

  // Create a base element to handle relative paths
  const baseElement = document.createElement('base');
  baseElement.href = baseUrl;
  document.head.prepend(baseElement);

  createRoot(rootElement).render(<App />);
};

// Initialize the app
initApp();

// Add TypeScript declaration for WordPress data
declare global {
  interface Window {
    wpData?: {
      pluginUrl: string;
      baseUrl: string;
    };
  }
}