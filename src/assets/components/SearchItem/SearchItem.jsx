/* eslint-disable react/prop-types */
/* SearchItem.jsx */
import './SearchItem.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Placeholder for loading and error state
const LoadingIndicator = () => <div className="loading">Loading...</div>;
const ErrorIndicator = () => <div className="error">Error loading item data.</div>;

const SearchItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    if (!item) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (item && !item.name) {
      setError(true);
    }
  }, [item]);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  const { name, city, cheapestPrice, rating, _id } = item || {};

  // Updated function to navigate to hotel details
  const handleDetailClick = () => {
    navigate(`/hotels/${_id}`); // Navigate to the hotel details page with the hotel ID
  };

  return (
    <div className='searchItem'>
      <img 
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywAQJZq_Pr5ueZkXhzcWTEF_zDFHiF02Xtuj_jjBIwLb21myCOwphJmDEpEjsRAwaz8E&usqp=CAU'} 
        alt={name || 'Hotel'} 
        className='siImg' 
      />
      <div className='siDesc'>
        <h1 className='siTitle'>{name || 'Unknown Hotel'}</h1>
        <span className='siCity'>{city || 'Unknown City'}</span>
        <span className='siPrice'>Starting from ${cheapestPrice || 'N/A'}</span>
        {rating !== undefined ? (
          <div className='siRating'>
            <button>{rating}</button>
            <span>Excellent</span>
          </div>
        ) : (
          <span>No rating available</span>
        )}
        <span className='siTaxOp'>Includes taxes and fees</span>
        <button onClick={handleDetailClick} className='siCheckButton'>See availability</button>
      </div>
    </div>
  );
};

export default SearchItem;
