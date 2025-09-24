import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';



const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🐾 Dog Daycare</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/catalog">Dog Catalog</Link>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;