import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="dog-card">
      <div className="dog-image">
        <img src={dog.img || dog.image} alt={dog.name} />
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