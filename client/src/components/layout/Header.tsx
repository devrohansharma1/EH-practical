import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";

interface HeaderProps {
  title: string;
  hasNotifications?: boolean;
}

export default function Header({ title, hasNotifications = false }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check saved theme from localStorage when component mounts
    const savedTheme = localStorage.getItem('theme');
    
    let isDark = false;
    
    if (savedTheme === 'dark') {
      isDark = true;
    } else if (savedTheme === 'light') {
      isDark = false;
    } else {
      // If no saved preference, check system preference
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setDarkMode(isDark);
    updateDocumentClass(isDark);
  }, []);

  const updateDocumentClass = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDocumentClass(newDarkMode);
  };

  return (
    <header className="border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <i className="ri-home-4-line text-xl"></i>
              <span className="hidden sm:inline">Home</span>
            </a>
          </Link>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <i className="ri-notification-3-line text-xl"></i>
            {hasNotifications && (
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <i className="ri-settings-3-line text-xl"></i>
          </Button>
          <Button 
            variant="ghost" 
            onClick={toggleDarkMode}
            className="text-muted-foreground hover:text-foreground"
          >
            <i className={`${darkMode ? 'ri-moon-line' : 'ri-sun-line'} text-xl mr-2`}></i>
            <span className="hidden md:inline">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
