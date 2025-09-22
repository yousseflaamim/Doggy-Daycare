import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDogs } from '../services/api';

const DogDetail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDog = async () => {
      const dogsData = await fetchDogs();
      // Search using chipNumber or id
      const foundDog = dogsData.find(d => 
        d.chipNumber === id || d.id === id
      );
      setDog(foundDog);
      setLoading(false);
    };
    
    getDog();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!dog) {
    return (
      <div className="container">
        <h1>Dog Not Found</h1>
        <Link to="/catalog">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="dog-detail-page">
      <div className="container">
        <Link to="/catalog" className="back-link">← Back to Catalog</Link>
        
        <div className="dog-detail">
          <div className="dog-image-large">
            <img src={dog.img} alt={dog.name} />
            <div className={`status-badge ${dog.present ? 'present' : 'absent'}`}>
              {dog.present ? 'Present at daycare' : 'Not present'}
            </div>
          </div>
          
          <div className="dog-info-detail">
            <h1>{dog.name}</h1>
            <div className="dog-attributes">
              <div className="attribute">
                <strong>Breed:</strong> {dog.breed}
              </div>
              <div className="attribute">
                <strong>Age:</strong> {dog.age} years
              </div>
              <div className="attribute">
                <strong>Gender:</strong> {dog.sex === 'male' ? 'Male' : 'Female'}
              </div>
              <div className="attribute">
                <strong>Chip Number:</strong> {dog.chipNumber}
              </div>
            </div>
            
            <div className="owner-info">
              <h2>Owner Information</h2>
              <div className="owner-details">
                <p><strong>Name:</strong> {dog.owner.name} {dog.owner.lastName}</p>
                <p><strong>Phone Number:</strong> {dog.owner.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;