import React, { useState } from 'react';

const SearchFilter = ({ dogs = [], onFilter }) => {
  const [filters, setFilters] = useState({
    search: '',
    breed: '',
    age: '',
    sex: '',
    status: ''
  });

  const safeDogs = Array.isArray(dogs) ? dogs : [];
  
  const breeds = [...new Set(safeDogs.map(dog => dog.breed))];
  const ages = [...new Set(safeDogs.map(dog => dog.age))];
  const sexes = ['male', 'female'];
  const statuses = ['present', 'absent'];

  const handleChange = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value
    };
    
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      breed: '',
      age: '',
      sex: '',
      status: ''
    };
    
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="search-filter">
      <div className="filter-group">
        <input
          type="text"
          name="search"
          placeholder="Search by dog name..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      
      <div className="filter-group">
        <select name="breed" value={filters.breed} onChange={handleChange}>
          <option value="">All Breeds</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <select name="age" value={filters.age} onChange={handleChange}>
          <option value="">All Ages</option>
          {ages.sort((a, b) => a - b).map(age => (
            <option key={age} value={age}>{age} years</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <select name="sex" value={filters.sex} onChange={handleChange}>
          <option value="">Both Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      
      <div className="filter-group">
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">All Statuses</option>
          <option value="present">Present at daycare</option>
          <option value="absent">Not present</option>
        </select>
      </div>
      
      <button onClick={clearFilters} className="btn-secondary">
        Clear Filters
      </button>
    </div>
  );
};

export default SearchFilter;