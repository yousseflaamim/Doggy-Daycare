import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css'

const Home = () => {
  const { isDarkMode } = useTheme();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Daily Care",
      description: "Comprehensive care for your dog during working hours",
      details:
        "Our daily care service includes feeding, walking, playtime, and rest periods tailored to your dog's needs. We maintain a structured schedule to ensure your pet feels secure and happy throughout the day."
    },
    {
      id: 2,
      title: "Entertainment Activities",
      description: "Various activities to keep your dog active",
      details:
        "We offer a range of stimulating activities including agility courses, puzzle toys, group play sessions, and supervised socialization to keep your dog physically and mentally engaged."
    },
    {
      id: 3,
      title: "Health Care",
      description: "Continuous health monitoring for your dog",
      details:
        "Our trained staff monitors your dog's wellbeing, administers medications as needed, and maintains detailed health logs. We're trained to recognize signs of distress and respond appropriately."
    }
  ];

  const toggleService = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
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
            {services.map((service) => (
              <div
                key={service.id}
                className={`feature-card ${activeService === service.id ? 'active' : ''}`}
                onClick={() => toggleService(service.id)}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {activeService === service.id && (
                  <div className="service-details">
                    <p>{service.details}</p>
                    <button className="btn-secondary">Learn More</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
