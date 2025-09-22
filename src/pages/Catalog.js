import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../services/api';
import DogList from '../components/DogList';
import SearchFilter from '../components/SearchFilter';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDogs = async () => {
      try {
        setLoading(true);
        const dogsData = await fetchDogs();
        
        // Ensure data exists and is an array
        if (!Array.isArray(dogsData)) {
          throw new Error('Invalid data');
        }
        
        // Add unique ID for each dog using chipNumber
        const dogsWithId = dogsData.map((dog, index) => ({
          ...dog,
          id: dog.chipNumber || `dog-${index + 1}`
        }));
        
        setDogs(dogsWithId);
        setFilteredDogs(dogsWithId);
        setError(null);
      } catch (err) {
        setError('Failed to load dogs data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    getDogs();
  }, []);

  const handleSearchFilter = (filters) => {
    let result = dogs;
    
    if (filters.search) {
      result = result.filter(dog => 
        dog.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.breed) {
      result = result.filter(dog => dog.breed === filters.breed);
    }
    
    if (filters.age) {
      result = result.filter(dog => dog.age.toString() === filters.age);
    }
    
    if (filters.sex) {
      result = result.filter(dog => dog.sex === filters.sex);
    }
    
    if (filters.status) {
      if (filters.status === 'present') {
        result = result.filter(dog => dog.present);
      } else if (filters.status === 'absent') {
        result = result.filter(dog => !dog.present);
      }
    }
    
    setFilteredDogs(result);
  };

  if (loading) {
    return <div className="loading">Loading dogs data...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="catalog-page">
      <div className="container">
        <h1>Dog Catalog</h1>
        <SearchFilter dogs={dogs} onFilter={handleSearchFilter} />
        <div className="dogs-count">
          <p>Showing {filteredDogs.length} out of {dogs.length} dogs</p>
        </div>
        <DogList dogs={filteredDogs} />
      </div>
    </div>
  );
};

export default Catalog;