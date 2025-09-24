import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDogs } from '../services/api';
import { useTheme } from '../context/ThemeContext';
import '../styles/DogDetail.css';

const DogDetail = () => {
    const { isDarkMode } = useTheme();
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const getDog = async () => {
            const dogsData = await fetchDogs();
            const foundDog = dogsData.find(d => 
                d.chipNumber === id || d.id === id
            );
            
            setDog(foundDog);
            setLoading(false);
        };
        
        getDog();
    }, [id]);

    const handleImageError = () => {
        setImageError(true);
    };

    if (loading) {
        return (
            <div className={`dog-detail-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="container">
                    <div className="loading" style={{ 
                        textAlign: 'center', 
                        padding: '2rem',
                        fontSize: '1.2rem'
                    }}>
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    if (!dog) {
        return (
            <div className={`dog-detail-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className="container">
                    <h1>Dog Not Found</h1>
                    <Link to="/catalog" className="back-link">← Back to Catalog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`dog-detail-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="container">
                <Link to="/catalog" className="back-link">← Back to Catalog</Link>
                
                <div className="dog-detail">
                    <div className={`dog-image-container ${imageError ? 'fallback' : ''}`}>
                        {!imageError ? (
                            <img 
                                src={dog.img} 
                                alt={dog.name}
                                className="dog-image-large"
                                onError={handleImageError}
                            />
                        ) : (
                            <div className="fallback-content">
                                <div className="fallback-icon">🐕</div>
                                <div className="fallback-text">No Image Available</div>
                            </div>
                        )}
                        
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