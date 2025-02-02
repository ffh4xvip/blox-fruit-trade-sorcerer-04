import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the base URL from the current page location
const baseUrl = window.location.pathname.replace(/\/[^/]*$/, '');

// Create a base element to handle relative paths
const baseElement = document.createElement('base');
baseElement.href = baseUrl + '/';
document.head.prepend(baseElement);

createRoot(document.getElementById("root")!).render(<App />);