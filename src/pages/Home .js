import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to Dog Daycare!</h1>
          <p>We provide the best care for your dog while you're away</p>
          <Link to="/catalog" className="btn-primary">
            Browse Dog Catalog
          </Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Daily Care</h3>
              <p>Comprehensive care for your dog during working hours</p>
            </div>
            <div className="feature-card">
              <h3>Entertainment Activities</h3>
              <p>Various activities to keep your dog active</p>
            </div>
            <div className="feature-card">
              <h3>Health Care</h3>
              <p>Continuous health monitoring for your dog</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;