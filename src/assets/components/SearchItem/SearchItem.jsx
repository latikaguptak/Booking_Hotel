/* eslint-disable react/prop-types */
/* SearchItem.jsx */
import './SearchItem.css';
import { useState, useEffect } from 'react';

// Placeholder for loading and error state
const LoadingIndicator = () => <div className="loading">Loading...</div>;
const ErrorIndicator = () => <div className="error">Error loading item data.</div>;

const SearchItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const { name, city, cheapestPrice, rating } = item || {};

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
      </div>
    </div>
  );
};

export default SearchItem;
