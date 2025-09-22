import React from 'react';
import { Link } from 'react-router-dom';
import DogCard from './DogCard ';

const DogList = ({ dogs }) => {
  if (dogs.length === 0) {
    return <div className="no-results">No dogs found matching search criteria.</div>;
  }

  return (
    <div className="dog-list">
      {dogs.map(dog => (
        <Link to={`/dog/${dog.chipNumber || dog.id}`} key={dog.chipNumber || dog.id}>
          <DogCard dog={dog} />
        </Link>
      ))}
    </div>
  );
};

export default DogList;