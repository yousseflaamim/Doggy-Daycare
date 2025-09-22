import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🐾 Dog Daycare</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/catalog">Dog Catalog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;