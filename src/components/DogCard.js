import React, { useState } from 'react';
import '../styles/components/DogCard.css'

const DogCard = ({ dog }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="dog-card">
      <div className="dog-image">
        {imageError ? (
          <div className="image-fallback">
            <span className="fallback-icon">🐕</span>
            <span className="fallback-text">Failed to load image</span>
          </div>
        ) : (
          <img 
            src={dog.img || dog.image} 
            alt={dog.name}
            onError={handleImageError}
          />
        )}
      </div>
      <div className="dog-info">
        <h3>{dog.name}</h3>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years</p>
        <p>Gender: {dog.sex === 'male' ? 'Male' : 'Female'}</p>
        <p>Status: {dog.present ? 'Present at daycare' : 'Not present'}</p>
      </div>
    </div>
  );
};

export default DogCard;