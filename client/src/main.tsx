import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize theme based on system preference or saved preference
const initializeTheme = () => {
  // Check if user has previously set a preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    // If no saved preference, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
};

// Initialize theme
initializeTheme();

// Create SVG shield icon for favicon
const svgIcon = document.createElement('link');
svgIcon.rel = 'icon';
svgIcon.type = 'image/svg+xml';
svgIcon.href = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><circle cx="12" cy="15" r="1"></circle></svg>';
document.head.appendChild(svgIcon);

createRoot(document.getElementById("root")!).render(<App />);
